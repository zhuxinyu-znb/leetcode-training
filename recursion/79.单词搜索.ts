/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    if(!board || board.length === 0) return false;
    const m = board.length;
    const n = board[0].length;
    const isArea = (x, y) => {
        return x >= 0 && x < m && y >= 0 && y < n
    }
    const dp = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const visited = new Array(m).fill(0).map((_) => new Array(n).fill(false));
    const search = (index, startx, starty) => {
        if(index === word.length - 1) {
            return board[startx][starty] === word[index]
        }
        if(board[startx][starty] === word[index]) {
            visited[startx][starty] = true;
            for(let i = 0; i < 4; i++) {
                let newX = startx + dp[i][0];
                let newY = starty + dp[i][1];
                if(isArea(newX, newY) && !visited[newX][newY]) {
                    if(search(index + 1, newX, newY)) {
                        return true;
                    }
                }
            }
            visited[startx][starty] = false;
        }
        return false
    }
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(search(0, i, j)) {
                return true;
            }
        }
    }
    return false;
};

// @lc code=end

