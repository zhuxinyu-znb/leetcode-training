/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    let map1 = {};
    let map2 = {};
    let len1: number = s.length;
    let len2: number = t.length;
    if(len1 !== len2) return false;
    for(let i = 0; i < len1; i++) {
        if(!map1[s[i]]) {
            if(map2[t[i]]) return false
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
        } else if(map1[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

