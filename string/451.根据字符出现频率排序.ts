/*
 * @lc app=leetcode.cn id=451 lang=typescript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
function frequencySort(s: string): string {
    let res = [];
    let map = new Map();
    for(let i = 0, len = s.length; i < len; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let arr = [];
    map.forEach((freq, char) => {
        if(arr[freq]) {
            arr[freq].push(char);
        } else {
            arr[freq] = [char];
        }
    });
    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
      arr[i].map(char => {
        res.push(char.repeat(i))
      })
    }
    }
    return res.join('');
};
// @lc code=end

