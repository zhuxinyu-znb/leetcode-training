/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层次遍历 II
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
function levelOrderBottom(root: TreeNode | null): number[][] {
    let res: number[][] = [];
    let queue: TreeNode[] = [];
    if(!root) return res;
    queue.push(root);
    while(queue.length > 0) {
        let len:number = queue.length;
        let arr: number[] = []
        while(len--) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            arr.push(node.val);
        }
        res.unshift(arr)
    }
    return res;
};
// dfs
function levelOrderBottom1(root: TreeNode | null): number[][] {
    let res: number[][] = [];
    dfs(root, 0, res)
    return res.reverse();
};
function dfs (node: TreeNode, level: number, res: number[][]) {
    if(node) {
        if(!res[level]) res[level] = [];
        res[level].push(node.val);
        dfs(node.left, level + 1, res);
        dfs(node.right, level + 1, res);
    }
}
// @lc code=end

