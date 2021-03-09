/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
    let map = {};
    let s:string = String(n)
    while(true) {
        let temp:number = 0;
        for(let i = 0, len = s.length; i < len; i++) {
            temp += Math.pow(Number(s[i]), 2);
        }
        if(map[temp]) {
            return false;
        }
        map[temp] = true;
        s = String(temp);
        if(temp === 1) return true;
    }
};
// @lc code=end

