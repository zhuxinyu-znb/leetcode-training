/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let res = [];
    if(!root) return res;
    let dfs = (node, target, path) => {
        if(!node) return;
        target = target - node.val
        path.push(node.val)
        if(!node.left && !node.right) {
            if(target === 0) {
                res.push(path.slice())
            }
        }
        dfs(node.left, target, path);
        dfs(node.right, target, path);
        path.pop()
    }
    dfs(root, targetSum, [])
    return res;
};
// @lc code=end

