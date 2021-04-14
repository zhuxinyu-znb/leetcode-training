/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    if(!board || board.length === 0) return;
    const m = board.length;
    const n = board[0].length;
    const isArea = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n;
    }
    const dp = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const dfs = (x, y) => {
        board[x][y] = 'NO'
        for(let i = 0; i < 4; i++) {
            const newX = x + dp[i][0]
            const newY = y + dp[i][1]
            if(isArea(newX, newY) && board[newX][newY] === 'O') {
                dfs(newX, newY)
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'O' && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) {
                dfs(i, j)
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'NO') {
                board[i][j] = 'O'
            } else if(board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
};
// @lc code=end

