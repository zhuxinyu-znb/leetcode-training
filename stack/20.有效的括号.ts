/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let stack = [];
    let arr = s.split('');
    for(let i = 0, len = arr.length; i < len; i++) {
        if(map[arr[i]]) {
            stack.push(arr[i]);
        } else {
            let temp = stack.pop();
            if(map[temp] !== arr[i]) return false;
        }
    }
    if(stack.length !== 0) return false;
    return true;
};
// @lc code=end

