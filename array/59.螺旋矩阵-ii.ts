/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  var b = [0, n - 1, 0, n - 1],
    x = 0,
    y = 0,
    i = 0,
    d = "→",
    r = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  while (i++ < Math.pow(n, 2)) {
    (d === "→" && ((r[y][x++] = i), x === b[1] && ((d = "↓"), ++b[2]))) ||
      (d === "↓" && ((r[y++][x] = i), y === b[3] && ((d = "←"), b[1]--))) ||
      (d === "←" && ((r[y][x--] = i), x === b[0] && ((d = "↑"), b[3]--))) ||
      (d === "↑" && ((r[y--][x] = i), y === b[2] && ((d = "→"), ++b[0])));
  }
  return r;
}
// @lc code=end
