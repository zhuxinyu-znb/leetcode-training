/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// 自顶向下
// @lc code=start
function integerBreak(n: number): number {
    const Max3 = (a, b, c) => {
        return Math.max(Math.max(a, b), c)
    }
    const memo = {}
    const dfs = (_n) => {
        if(_n === 1) return 1
        if(memo[_n]) return memo[_n]
        let res = -1;
        for(let i = 1; i < n; i ++) {
            res = Max3(res, i * (n - i), i * dfs(n - i))
        }
        memo[_n] = res;
        return res;
    }
    return dfs(n);
};
// @lc code=end

// 自下而上动态规划
function integerBreak1(n: number): number {
    const Max3 = (a, b, c) => {
        return Math.max(Math.max(a, b), c)
    }
    const memo = new Array(n + 1).fill(-1)
    memo[1] = 1
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            memo[i] = Max3(memo[i], j * (i - j), j * memo[i - j])
        }
    }
    return memo[n]
};