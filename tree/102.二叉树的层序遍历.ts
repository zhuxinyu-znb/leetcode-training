/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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
// 深度有限
// dfs
function levelOrder(root: TreeNode | null): number[][] {
    let res = [];
    if(!root) return res;
    dfs(root, 0, res);
    return res;
};
function dfs(node: TreeNode, level: number, res: number[][]) {
    if(node) {
        if(!res[level]) res[level] = [];
        res[level].push(node.val);
        dfs(node.left, level + 1, res);
        dfs(node.right, level + 1, res);
    }
}
// 广度优先
// bfs
function levelOrder1(root: TreeNode | null): number[][] {
    let res = [];
    let queue = [];
    if(!root) return res;
    queue.push(root);
    while(queue.length > 0) {
        let len = queue.length;
        let ret = [];
        while(len--) {
            let node = queue.shift()
            ret.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(ret);
    }
    return res;
};
// @lc code=end

