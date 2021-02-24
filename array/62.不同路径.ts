/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// 动态规划
// @lc code=start
function uniquePaths1(m: number, n: number): number {
    let dp:number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let k = 1; k < m; k++) {
        for(let l = 1; l < n; l++) {
            dp[k][l] = dp[k - 1][l] + dp[k][l - 1];
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

// 数学法
function uniquePaths2(m: number, n: number): number {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};