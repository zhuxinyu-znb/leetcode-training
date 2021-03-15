/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let flag = 0;
    let _res = new ListNode();
    let res = _res;
    while(l1 && l2) {
        let val = l1.val + l2.val + flag;
        if(val > 9) {
            flag = 1
        } else {
            flag = 0;
        }
        let next = new ListNode(val % 10);
        _res.next = next;
        _res = next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        let val = l1.val + flag
        if(val > 9) {
            flag = 1;
        } else {
            flag = 0;
        }
        l1.val = val % 10
        _res.next = l1;
        l1 = l1.next;
        _res = _res.next;
    }
    while(l2) {
        let val = l2.val + flag
        if(val > 9) {
            flag = 1;
        } else {
            flag = 0;
        }
        l2.val = val % 10
        _res.next = l2;
        l2 = l2.next;
        _res = _res.next;
    }
    if(flag === 1) {
        _res.next = new ListNode(1);
    }
    return res.next;
};
// @lc code=end

