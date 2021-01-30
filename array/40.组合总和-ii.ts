/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function backtrack(list, tempList, nums, remain, start) {
  if (remain < 0) return;
  else if (remain === 0) return list.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    // 和39.combination-sum 的其中一个区别就是这道题candidates可能有重复
    // 代码表示就是下面这一行
    if (i > start && nums[i] == nums[i - 1]) continue; // skip duplicates
    tempList.push(nums[i]);
    backtrack(list, tempList, nums, remain - nums[i], i + 1); // i + 1代表不可以重复利用， i 代表数字可以重复使用
    tempList.pop();
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  const list = [];
  backtrack(
    list,
    [],
    candidates.sort((a, b) => a - b),
    target,
    0
  );
  return list;
}
// @lc code=end
