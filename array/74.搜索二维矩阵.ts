/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0) return false;
  let m: number = matrix.length;
  let n: number = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
      for (let j = 0; j < n; j++) {
        if (target === matrix[i][j]) {
          return true;
        }
      }
    }
  }
  return false;
}
// @lc code=end
