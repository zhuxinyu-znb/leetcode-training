/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    const ans = [];
    const vis = new Array(nums.length).fill(false);
    const backtrack = (idx, perm) => {
        if (idx === nums.length) {
            ans.push(perm.slice());
            return;
        }
        for (let i = 0; i < nums.length; ++i) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            perm.push(nums[i]);
            vis[i] = true;
            backtrack(idx + 1, perm);
            vis[i] = false;
            perm.pop();
        }
    }
    nums.sort((x, y) => x - y);
    backtrack(0, []);
    return ans;
};
// @lc code=end

