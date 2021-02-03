/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  if (!matrix) return res;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;
  let top = 0;
  let cur = 0;
  const sum = matrix.length * matrix[0].length;
  while (cur < sum) {
    let p1 = top;
    let p2 = left;
    while (p2 <= right && cur < sum) {
      res.push(matrix[p1][p2]);
      cur++;
      p2++;
    }
    p2 = right;
    p1 = top + 1;
    while (p1 <= bottom && cur < sum) {
      res.push(matrix[p1][p2]);
      cur++;
      p1++;
    }
    p1 = bottom;
    p2 = right - 1;
    while (p2 >= left && cur < sum) {
      res.push(matrix[p1][p2]);
      cur++;
      p2--;
    }
    p1 = bottom - 1;
    p2 = left;
    while (p1 > top && cur < sum) {
      res.push(matrix[p1][p2]);
      cur++;
      p1--;
    }
    top++;
    left++;
    right--;
    bottom--;
  }
  return res;
}
// @lc code=end
