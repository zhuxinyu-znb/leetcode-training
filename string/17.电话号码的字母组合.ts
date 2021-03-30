/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    let res = [];
    if(!digits) return res;
    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    let findCombination = (digit, index, str) => {
        if(index === digits.length) {
            res.push(str)
            return;
        }
        let char = digit[index];
        let letters = map[char]
        for(let i = 0, len = letters.length; i < len; i++) {
            findCombination(digit, index + 1, str + letters[i])
        }
        return;
    }
    findCombination(digits, 0, '')
    return res;
};
// @lc code=end

