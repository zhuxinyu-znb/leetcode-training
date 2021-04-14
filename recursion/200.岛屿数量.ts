/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    if(!grid || grid.length === 0) return 0;
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(_ => new Array(n).fill(false))
    const isArea = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    const dp = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const dfs = (_grid, x, y) => {
        visited[x][y] = true;
        for(let i = 0; i < 4; i++) {
            let newX = x + dp[i][0]
            let newY = y + dp[i][1]
            if(isArea(newX, newY) && !visited[newX][newY] && _grid[newX][newY] === '1') {
                dfs(_grid, newX, newY)
            }
        }
        return;
    }
    let res = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1' && !visited[i][j]) {
                res++;
                dfs(grid, i, j)
            }
        }
    }
    return res;
};
// @lc code=end

