/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [];
  let paths = [];
  let dfs = (node, path) => {
    if (node) {
      path += node.val.toString();
      if (!node.left && !node.right) {
        paths.push(path);
      } else {
        let str = path + "->";
        dfs(node.left, str);
        dfs(node.right, str);
      }
    }
  };
  dfs(root, "");
  return paths;
}
function binaryTreePaths1(root: TreeNode | null): string[] {
    if (!root) return [];
    let paths = [];
    let nodeQueue = [];
    let pathQueue = [];
    nodeQueue.push(root);
    pathQueue.push(root.val.toString());
    while(nodeQueue.length) {
        let node = nodeQueue.shift();
        let path = pathQueue.shift();
        if(!node.left && !node.right) {
            paths.push(path);
        } else {
            if(node.left) {
                nodeQueue.push(node.left);
                pathQueue.push(path + '->' + node.left.val.toString());
            }
            if(node.right) {
                nodeQueue.push(node.right);
                pathQueue.push(path + '->' + node.right.val.toString());
            }
        }
    }
    return paths;
  }
// @lc code=end
