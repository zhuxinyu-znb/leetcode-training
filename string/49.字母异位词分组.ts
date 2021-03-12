/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();
    let res = [];
    for(let i = 0, len = strs.length; i < len; i++) {
        let temp = strs[i]
        let key = temp.split('').sort().join('');
        if(map.has(key)) {
            map.set(key, [...map.get(key), temp])
        } else {
            map.set(key, [temp])
        }
    }
    map.forEach((item) => {
        res.push(item)
    })
    return res;
};
// @lc code=end

