/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    let res = [];
    let temp = [];
    let used = new Array(nums.length).fill(false);
    let fn = (nums, index, p) => {
        if(index === nums.length) {
            res.push(p.slice(0));
            return;
        }
        for(let i = 0, len = nums.length; i < len; i++) {
            if(!used[i]) {
                p.push(nums[i]);
                used[i] = true;
                fn(nums, index + 1, p);
                p.pop();
                used[i] = false;
            }
        }
        return;
    }
    fn(nums, 0, temp);
    return res;
};
// @lc code=end

