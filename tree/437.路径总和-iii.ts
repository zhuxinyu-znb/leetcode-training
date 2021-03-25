/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, sum: number): number {
    // 二叉树-题目要求只能从父节点到子节点 所以用先序遍历

    // 路径总数
    let ans = 0

    // 存储前缀和
    let map = new Map()

    // 先序遍历二叉树
    function dfs(presum,node) {
      if(!node)return 0 // 遍历出口

      // 将当前前缀和添加到map
      map.set(presum,(map.get(presum) || 0) +1 )
      // 从根节点到当前节点的值
      let target = presum + node.val

      // target-sum = 需要的前缀和长度
      // 然而前缀和之前我们都存过了 检索map里key为该前缀和的value
      // map的值相当于有多少个节点到当前节点=sum 也就是有几条路径
      ans+=(map.get(target - sum) || 0)

      // 按顺序遍历左右节点
      dfs(target,node.left)
      dfs(target,node.right)

      // 这层遍历完就把该层的前缀和去掉
      map.set(presum,map.get(presum) -1 )
    }
    dfs(0,root)
    return ans
};

// @lc code=end

