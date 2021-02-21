/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j = m - 1;
    let k = n - 1;
    let i = m + n - 1;
    while(j >= 0 && k >= 0){
        if(nums1[j] > nums2[k]) {
            nums1[i--] = nums1[j--];
        } else {
            nums1[i--] = nums2[k--];
        }
    }
    while(k >= 0) {
        nums1[i--] = nums2[k--];
    }
};
// @lc code=end

