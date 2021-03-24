/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根到叶子节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
    let arr = [];
    let dfs = (node, path) => {
        if(!node) return;
        path += node.val;
        if(!node.left && !node.right) {
            arr.push(path);
            return;
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }
    dfs(root, '');
    let res = 0;
    arr.forEach((item) => {
        res += Number(item)
    })
    return res;
};

function sumNumbers1(root: TreeNode | null): number {
    let res = 0;
    if(!root) return res;
    let nodeQueue = [];
    let pathQueue = [];
    nodeQueue.push(root);
    pathQueue.push(root.val);
    while(nodeQueue.length) {
        let node = nodeQueue.shift();
        let path = pathQueue.shift();
        if(!node.left && !node.right) {
            res += Number(path);
        } else {
            if(node.left) {
                nodeQueue.push(node.left);
                pathQueue.push(path * 10 + node.left.val);
            }
            if(node.right) {
                nodeQueue.push(node.right);
                pathQueue.push(path * 10 + node.right.val);
            }
        }
    }
    return res;
};
// @lc code=end

