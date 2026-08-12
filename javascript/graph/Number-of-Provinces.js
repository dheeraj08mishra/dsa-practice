/*
There are n cities. Some of them are connected, while some are not.

If city a is connected directly with city b, and city b is connected
directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and
no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1
 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

*/

var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  const visited = new Array(n).fill(false);
  let count = 0;

  let dfs = function (city) {
    for (let i = 0; i < n; i++) {
      if (isConnected[city][i] === 1 && !visited[i]) {
        visited[i] = true;
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i);
      count++;
    }
  }
  return count;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
