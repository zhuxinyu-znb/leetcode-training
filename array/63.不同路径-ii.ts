/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if(!obstacleGrid || obstacleGrid.length === 0 || obstacleGrid[0][0] === 1) return 0;
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp:number[][] = new Array(m).fill(0).map((_) => new Array(n).fill(0));
    dp[0][0] = 1;
    for(let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1
    }
    for(let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

