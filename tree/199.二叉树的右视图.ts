/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
    let res = []
    if(!root) return res;
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        let len = queue.length;
        let arr = [];
        while(len--) {
            let node = queue.shift();
            arr.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(arr[0])
    }
    return res;
};
// @lc code=end

