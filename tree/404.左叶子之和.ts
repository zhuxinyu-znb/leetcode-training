/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if(!root) return 0;
    let isLeafNode = (node) => {
        return !node.left && !node.right
    }
    let dfs= (node) => {
        let ans = 0;
        if(node.left) {
            ans += isLeafNode(node.left) ? node.left.val : dfs(node.left)
        }
        if(node.right && !isLeafNode(node.right)) {
            ans += dfs(node.right)
        }
        return ans;
    }
    dfs(root);
};
// @lc code=end

