/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal1(root: TreeNode | null): number[] {
    let res = [];
    let stack = [];
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
function inorderTraversal2(root: TreeNode | null): number[] {
    return root? [...inorderTraversal2(root.left), root.val, ...inorderTraversal2(root.right)]: []
};
// @lc code=end

