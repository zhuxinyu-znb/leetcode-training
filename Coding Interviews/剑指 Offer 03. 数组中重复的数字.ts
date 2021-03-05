function findRepeatNumber(nums: number[]): number {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++) {
        if(map.has(nums[i])) return nums[i];
        map.set(nums[i], 1);
    }
    return -1;
};