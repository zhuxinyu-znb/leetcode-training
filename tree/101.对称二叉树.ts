/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
// dfs
function isSymmetric(root: TreeNode | null): boolean {
    let dfs = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        return node1.val === node2.val && dfs(node1.left, node2.right) && dfs(node1.right, node2.left)
    }
    return dfs(root, root);
};

// bfs
function isSymmetric1(root: TreeNode | null): boolean {
    let queue = [];
    queue.push(root);
    queue.push(root);
    while(queue.length > 0) {
        let p = queue.shift();
            let q = queue.shift();
            if(!p && !q) continue;
            if(!p || !q || p.val !== q.val) return false;
            queue.push(p.left);
            queue.push(q.right);
            queue.push(q.left);
            queue.push(p.right);
    }
    return true
};
// @lc code=end

