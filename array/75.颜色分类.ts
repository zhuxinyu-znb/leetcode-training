/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let len:number = nums.length;
    let pre:number = 0;
    for(let i = 0; i < len; i++) {
        if(nums[i] === 0) {
            let temp = nums[i];
            nums[i] = nums[pre];
            nums[pre++] = temp;
        }
    }
    for(let i = 0; i < len; i++) {
        if(nums[i] === 1) {
            let temp = nums[i];
            nums[i] = nums[pre];
            nums[pre++] = temp;
        }
    }
};
// @lc code=end

