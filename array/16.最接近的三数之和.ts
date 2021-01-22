/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    let res: number = -Infinity;
    let diff: number = Infinity;
    nums.sort((a, b) => a - b);
    for(let i = 0, len = nums.length; i < len; i++) {
        if(i === i + 1) continue;
        let left: number = i + 1;
        let right: number = len - 1;
        while(left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];
            if(Math.abs(sum - target) < diff) {
                res = sum;
                diff = Math.abs(sum - target);
            }
            if(sum === target) {
                return sum;
            } else if(sum <= target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};
// @lc code=end

