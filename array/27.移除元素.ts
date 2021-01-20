/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        if(nums[i] === val) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j--
        } else {
            i++
        }
    }
    if (nums[i] === val) {
        return i
    }
    return i + 1
};
// @lc code=end

