/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
    let res = 0;
    let record = new Map();
    for(let i = 0, len = A.length; i < len; i++) {
        for(let j = 0, _len = B.length; j < _len; j++) {
            let temp = A[i] + B[j];
            if(record.has(temp)) {
                record.set(temp, record.get(temp) + 1)
            } else {
                record.set(temp, 1)
            }
        }
    }
    for(let k = 0, len = C.length; k < len; k++) {
        for(let l = 0, _len = D.length; l < _len; l++) {
            if(record.has(-C[k] - D[l])) {
                res += record.get(-C[k] - D[l]);
            }
        }
    }
    return res;
};
// @lc code=end

