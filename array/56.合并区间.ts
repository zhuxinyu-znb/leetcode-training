/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

function intervaled(a: number[], b: number[]): boolean {
  if (a[0] > b[1] || a[1] < b[0]) return false;
  return true;
}
function mergeToOne(a: number[], b: number[]): number[] {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (!intervals || intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0, len: number = intervals.length - 1; i < len; i++) {
    let interval1: number[] = intervals[i];
    let interval2: number[] = intervals[i + 1];
    if (intervaled(interval1, interval2)) {
      intervals[i] = undefined;
      intervals[i + 1] = mergeToOne(interval1, interval2);
    }
  }
  return intervals.filter(q => q);
}
// @lc code=end
