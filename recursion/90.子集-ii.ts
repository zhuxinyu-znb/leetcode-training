/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    let res = [];
    backtrack(res, [], nums.sort((a, b) => b - a), 0);
    return res;
};
function backtrack(list, tempList, nums, start) {
    list.push([...tempList]);
    for(let i = start; i < nums.length; i++) {
        if(i !== start && nums[i] === nums[i - 1]) {
            continue;
        }
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop();
    }
}
// @lc code=end
