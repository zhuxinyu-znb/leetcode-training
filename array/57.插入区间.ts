/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    if(!intervals || intervals.length === 0) {
        return [newInterval]
    }
    let res: number[][] = [];
    let cur = 0;
    let len = intervals.length;
    while(cur < len && intervals[cur][1] < newInterval[0]) {
        res.push(intervals[cur++]);
    }
    while(cur < len &&  intervals[cur][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[cur][0])
        newInterval[1] = Math.max(newInterval[1], intervals[cur++][1])
    }
    res.push(newInterval);
    while(cur < len) {
        res.push(intervals[cur++]);
    }
    return res;
};
// @lc code=end

