/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let i: number = 0;
    let j: number = 0;
    let len: number = nums.length;
    while(i < len) {
        if(nums[i] !== 0) {
            let temp = nums[j];
            nums[j++] = nums[i];
            nums[i] = temp;
        }
        i++;
    }
};
// @lc code=end

