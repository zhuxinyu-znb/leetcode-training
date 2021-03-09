/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    let res: number[] = [];
    let map = new Map();
    for(let i = 0, len = nums1.length; i < len; i++) {
        if(map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1);
        }
    }
    for(let j = 0, len = nums2.length; j < len; j++) {
        if(map.has(nums2[j]) && map.get(nums2[j]) > 0) {
            res.push(nums2[j]);
            map.set(nums2[j], map.get(nums2[j]) - 1)
        }
    }
    return res;
};
// @lc code=end

