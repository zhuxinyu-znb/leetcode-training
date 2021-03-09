/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    let res:number[] = [];
    let _nums1 = new Set(nums1);
    for(let i = 0, len = nums2.length; i < len; i++) {
        if(_nums1.has(nums2[i])) {
            res.push(nums2[i]);
        }
    }
    return Array.from(new Set(res))
};
// @lc code=end

