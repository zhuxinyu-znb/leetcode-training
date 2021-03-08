/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let res:number = 0;
    let map:Array<String> = [];
    let l:number = 0;
    let r: number = -1;
    let len: number = s.length;
    while(l < len) {
        if(r + 1 < len && !map.includes(s[r + 1])) {
            map.push(s[++r]);
        } else {
            map.shift();
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
// @lc code=end

