/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let i:number = 0;
    let j:number = numbers.length;
    while(i < j) {
        if(numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
        } else if(numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
};
// @lc code=end

