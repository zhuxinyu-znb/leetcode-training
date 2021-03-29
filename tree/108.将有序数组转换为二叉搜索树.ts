/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper1(nums, 0, nums.length - 1)
};
function helper1 (nums, start, end) {
    if(start > end) {
        return null;
    }
    let mid = (start + end) >>> 1;
    const root = new TreeNode(nums[mid]);
    root.left = helper1(nums, start, mid - 1);
    root.right = helper1(nums, mid + 1, end);
    return root;
}
// @lc code=end

