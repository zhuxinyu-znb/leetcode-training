/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原IP地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
    let ans = [];
    let count = 4;
    let arr = new Array(count);
    let dfs = (s, segId, segStart) => {
        if(segId === 4) {
            if(segStart === s.length) {
                ans.push(arr.join('.'))
            }
            return;
        }
        if(segStart === s.length) {
            return;
        }
        if(s.charAt(segStart) === '0') {
            arr[segId] = 0;
            dfs(s, segId + 1, segStart + 1);
        }
        let addr = 0;
        for(let end = segStart; end < s.length; end++) {
            addr = addr * 10 + (s.charAt(end) - 0)
            if(addr > 0 && addr <= 255) {
                arr[segId] = addr;
                dfs(s, segId + 1, end + 1);
            } else {
                break;
            }
        }
    }
    dfs(s, 0, 0);
    return ans;
};
// @lc code=end

