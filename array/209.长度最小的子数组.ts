/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    const len:number = nums.length;
    let res: number = len + 1;
    let left: number = 0;
    let right: number = -1;
    let sum:number = 0;
    while(left < len) {
        if(right + 1 < len && sum < target) {
            sum += nums[++right]
        } else {
            sum -= nums[left++];
        }
        if(sum >= target) {
            res = Math.min(res, right - left + 1);
        }
    }
    if(res === len + 1) return 0;
    return res;
};
// @lc code=end

