/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    let res = [];
    let temp = [];
    if(n <= 0 || k <= 0 || k > n) {
        return res;
    }
    let fn = (_n, _k, index, c) => {
        if(c.length === _k) {
            res.push(c.slice(0));
            return;
        }
        for(let i = index; i <= _n; i++) {
            c.push(i);
            fn(n, k, i + 1, c);
            c.pop();
        }
        return;
    }
    fn(n, k, 1, temp);
    return res;
};
// @lc code=end

