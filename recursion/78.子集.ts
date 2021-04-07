/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// 方法一
// @lc code=start
function subsets1(nums: number[]): number[][] {
    let res:number[][] = []
    backtrack(res, [], nums, 0)
    return res;
};
// @lc code=end

function backtrack(list:number[][], tempList:number[], nums:number[], start:number):void {
    list.push([...tempList]);
    for(let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop();
    }
}

// 方法二
function subsets2(nums: number[]): number[][] {
    let result: number[][] = [[]]

    for(let n of nums){
        let temp = JSON.parse(JSON.stringify(result))

        for(let a of temp){
            a.push(n)
        }

        result = result.concat(temp)
    }

    return result
};