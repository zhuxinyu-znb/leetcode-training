/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for(let i = 0, len: number = nums.length; i < len; i++) {
        const another = target - nums[i];
        if(map.has(another)) {
            return [i, map.get(another)]
        } else {
            map.set(nums[i], i)
        }
    }
};
