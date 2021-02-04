/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let len:number = nums.length;
    let max:number = 0;
    for(let i = 0; i < len; i++) {
        if(max < i) return false;
        max = Math.max(nums[i] + i, max);
    }
    return max >= len - 1;
};
// @lc code=end

