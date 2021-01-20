/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    if(!height || height.length === 0) {
        return 0
    }
    let i: number = 0;
    let j: number = height.length - 1;
    let max: number = 0;
    while(i < j) {
        if(height[i] <= height[j]) {
            max = Math.max(max, (j - i) * height[i])
            i++;
        } else {
            max = Math.max(max, (j - i) * height[j])
            j--;
        }
    }
    return max;
};
// @lc code=end

