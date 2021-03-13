/*
 * @lc app=leetcode.cn id=447 lang=typescript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
function numberOfBoomerangs(points: number[][]): number {
    let res = 0;
    for(let i = 0, len = points.length; i < len; i++) {
        let map = new Map();
        for(let j = 0; j < len; j++) {
            if(j !== i) {
                let d = dis(points[i], points[j])
                if(map.has(d)) {
                    map.set(d, map.get(d) + 1);
                } else {
                    map.set(d, 1);
                }
            }
        }
        map.forEach((item) => {
            res += item * (item - 1)
        })
    }
    return res;
};
function dis (p1, p2) {
    return Math.pow((p1[0] - p2[0]), 2) + Math.pow(p1[1] - p2[1], 2);
}
// @lc code=end

