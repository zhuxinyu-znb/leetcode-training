/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    const mergeTree = node => {
        if (!node.left && !node.right) return null
        if (!node.left && node.right) return node.right
        if (node.left && !node.right) return node.left
        let curr = node.right
        while (curr.left) curr = curr.left
        curr.left = node.left
        return node.right
      }
      if (!root) return null
      if (root.val === val) return mergeTree(root)
      let curr = root, parent, key = ''
      while (curr && curr.val !== val) {
        parent = curr
        key = curr.val > val ? 'left' : 'right'
        curr = curr[key]
      }
      if (!curr) return root
      parent[key] = mergeTree(curr)
      return root
};
// @lc code=end

