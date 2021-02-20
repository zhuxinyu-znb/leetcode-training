/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    if(!digits || digits.length === 0) return [1];
    let temp = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] + temp > 9) {
            digits[i] = digits[i] + temp - 10;
            temp = 1;
        } else {
            digits[i]++;
            temp = 0;
            break;
        }
    }
    if(temp > 0) {
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

