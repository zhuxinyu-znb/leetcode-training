/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const res = [], win = {}, need = {}, pLen = p.length;
    let len = 0, val = 0;
    for (const x of p) {
        if (need[x] === undefined) {
            need[x] = win[x] = 0;
            len++;
        }
        need[x]++;
    }
    for (let i = 0; i < s.length; i++) {
        const j = i - pLen;
        if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
        if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
        if (val === len) res.push(j + 1);
    }
    return res;
};
// @lc code=end

