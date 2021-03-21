/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
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
// bfs
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let res: number[][] = [];
    if(!root) return res;
    let queue: TreeNode[] = [];
    queue.push(root);
    let flag = true;
    while(queue.length > 0) {
        let len = queue.length;
        let arr = [];
        while(len--) {
            let node = queue.shift();
            if(flag) {
                arr.push(node.val);
            } else {
                arr.unshift(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        flag = !flag
        res.push(arr);
    }
    return res;
};
// dfs

// @lc code=end

