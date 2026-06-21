#!/usr/bin/env bash
#
# dsa-commit.sh
# Run this from the root of the dsa-practice repo after solving a problem.
# It finds the file you just added/changed, builds a commit message,
# updates the README log table, and commits + pushes.
#
# Usage:
#   ./scripts/dsa-commit.sh
#   ./scripts/dsa-commit.sh path/to/file.js     (optional: target a specific file)

set -e

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)"
if [ -z "$REPO_ROOT" ]; then
  echo "Not inside a git repo. cd into dsa-practice first."
  exit 1
fi
cd "$REPO_ROOT"

# 1. Find the target file: either passed as arg, or the single new/modified
#    file under javascript/ or java/ (untracked or modified, not deleted).
TARGET_FILE="$1"

if [ -z "$TARGET_FILE" ]; then
  CANDIDATES=$(git status --porcelain -uall -- javascript java | grep -E '^( M|\?\?|A )' | awk '{print $2}')
  COUNT=$(echo "$CANDIDATES" | grep -c . || true)

  if [ "$COUNT" -eq 0 ]; then
    echo "No new or changed files found under javascript/ or java/."
    echo "Solve a problem, save the file, then re-run this script."
    exit 1
  elif [ "$COUNT" -gt 1 ]; then
    echo "Multiple changed files found:"
    echo "$CANDIDATES"
    echo ""
    echo "Run again with the specific file: ./scripts/dsa-commit.sh <path>"
    exit 1
  else
    TARGET_FILE="$CANDIDATES"
  fi
fi

if [ ! -f "$TARGET_FILE" ]; then
  echo "File not found: $TARGET_FILE"
  exit 1
fi

# 2. Parse language, topic, problem name from path.
#    Expected: javascript/<topic>/<problem-slug>.js
#              java/<topic>/<problem-slug>.java
LANG_DIR=$(echo "$TARGET_FILE" | cut -d'/' -f1)
TOPIC=$(echo "$TARGET_FILE" | cut -d'/' -f2)
FILENAME=$(basename "$TARGET_FILE")
SLUG="${FILENAME%.*}"
EXT="${FILENAME##*.}"

case "$LANG_DIR" in
  javascript) LANG_LABEL="JS" ;;
  java) LANG_LABEL="Java" ;;
  *)
    echo "File must be under javascript/ or java/. Got: $LANG_DIR"
    exit 1
    ;;
esac

# slug -> Title Case. Handles both styles:
#   kebab-case: two-sum -> Two Sum
#   PascalCase/camelCase: TwoSum -> Two Sum
if echo "$SLUG" | grep -q '-'; then
  PROBLEM_NAME=$(echo "$SLUG" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')
else
  PROBLEM_NAME=$(echo "$SLUG" | sed -E 's/([a-z0-9])([A-Z])/\1 \2/g; s/^([a-z])/\u\1/')
fi

# 3. Commit message: "LeetCode: Two Sum (JS)"
COMMIT_MSG="LeetCode: ${PROBLEM_NAME} (${LANG_LABEL})"

# 4. Update README table.
README="README.md"
DATE=$(date +%Y-%m-%d)
REPO_REL_PATH="$TARGET_FILE"
ROW="| ${DATE} | ${PROBLEM_NAME} | ${LANG_LABEL} | ${TOPIC} | [link](${REPO_REL_PATH}) |"

if [ ! -f "$README" ]; then
  echo "README.md not found at repo root. Run setup first."
  exit 1
fi

if ! grep -q "| Date | Problem | Language | Topic | Link |" "$README"; then
  echo "README.md doesn't have the expected table header. Check setup."
  exit 1
fi

# Insert the new row right after the table separator line (so newest stays near top).
awk -v row="$ROW" '
  {
    print
    if ($0 ~ /^\|[- ]+\|[- ]+\|[- ]+\|[- ]+\|[- ]+\|$/ && !inserted) {
      print row
      inserted = 1
    }
  }
' "$README" > "${README}.tmp" && mv "${README}.tmp" "$README"

# 5. Stage, commit, push.
git add "$TARGET_FILE" "$README"
git commit -m "$COMMIT_MSG"
git push

echo ""
echo "Committed and pushed: $COMMIT_MSG"
