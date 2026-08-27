/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
You are given an array prerequisites where prerequisites[i] = [ai, bi]
indicates that you must take course ai first if you want to take course bi.

For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c,
then course a is a prerequisite of course c.

You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer
whether course uj is a prerequisite of course vj or not.

Return a boolean array answer, where answer[j] is the answer to the jth query.

Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [false,true]
Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
Course 0 is not a prerequisite of course 1, but the opposite is true.


Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]
Explanation: There are no prerequisites, and each course is independent.


Input: numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
Output: [true,true]
*/

var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  let reachable = Array.from({ length: numCourses }, () =>
    new Array(numCourses).fill(false),
  );

  for (let i = 0; i < prerequisites.length; i++) {
    reachable[prerequisites[i][0]][prerequisites[i][1]] = true;
  }
  for (let k = 0; k < numCourses; k++) {
    for (let i = 0; i < numCourses; i++) {
      for (let j = 0; j < numCourses; j++) {
        reachable[i][j] =
          reachable[i][j] || (reachable[i][k] && reachable[k][j]);
      }
    }
  }

  let answer = new Array(queries.length).fill(false);

  for (let i = 0; i < queries.length; i++) {
    answer[i] = reachable[queries[i][0]][queries[i][1]];
  }
  return answer;
};

console.log(
  checkIfPrerequisite(
    3,
    [
      [1, 2],
      [1, 0],
      [2, 0],
    ],
    [
      [1, 0],
      [1, 2],
    ],
  ),
);
