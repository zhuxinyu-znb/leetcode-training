/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal1(root: TreeNode | null): number[] {
    let res = [];
    let preOrderTraverseNode = (node) => {
        if(node) {
            res.push(node.val);
            preOrderTraverseNode(node.left);
            preOrderTraverseNode(node.right);
        }
    }
    preOrderTraverseNode(root)
    return res;
};
var preorderTraversal2 = function(root) {
    return root ? [root.val, ...preorderTraversal2(root.left), ...preorderTraversal2(root.right)] : []
};
// @lc code=end

