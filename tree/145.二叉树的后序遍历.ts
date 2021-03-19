/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
    return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] :[]
};
function postorderTraversal1(root: TreeNode | null): number[] {
    const list = [];
    const stack = [];
    
    // 当根节点不为空的时候，将根节点入栈
    if(root) stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        // 根左右=>右左根
        list.unshift(node.val)
        
        // 先进栈左子树后右子树
        // 出栈的顺序就变更为先右后左
        // 右先头插法入list
        // 左再头插法入list
        // 实现右左根=>左右根
        if(node.left !== null) {
            stack.push(node.left)
        }
        if(node.right !== null) {
            stack.push(node.right)
        }
    }
    return list
};
// @lc code=end

