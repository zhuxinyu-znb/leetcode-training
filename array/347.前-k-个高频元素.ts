/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let arrObj = Array.from(map);
    arrObj.sort((a, b) => b[1] - a[1])
    let res = []
    for(let j = 0; j < k; j++) {
        res.push(arrObj[j][0])
    }
    return res;
};
// @lc code=end

