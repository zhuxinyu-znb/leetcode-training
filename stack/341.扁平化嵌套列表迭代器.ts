/*
 * @lc app=leetcode.cn id=341 lang=typescript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

 class NestedIterator {
    private stack: NestedInteger[][];
    constructor(nestedList: NestedInteger[]) {
        // console.log(nestedList[0]);
        this.stack = [nestedList];
        this.goDown();
    }

    goDown() {
        if (!this.stack.length) return 0;
        let topRef = this.stack[this.stack.length - 1];
        if (!topRef.length) {
            this.stack.pop()!;
            this.goDown();
            return;
        }
        if (topRef[0].isInteger()) return;
        // Go down further
        const newList = topRef.shift()!.getList();
        this.stack.push(newList);
        this.goDown();
    }

    hasNext(): boolean {
        return this.stack.length && this.stack[this.stack.length - 1].length > 0;
    }

    next(): number {
        let topRef = this.stack[this.stack.length - 1];
        const ret: number = topRef.shift()!.getInteger();
        this.goDown();
        return ret;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
// @lc code=end

