/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    if(!nums || nums.length === 0) {
        return 0;
    }
    for(let i = 0, len:number = nums.length; i < len; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};
// @lc code=end

