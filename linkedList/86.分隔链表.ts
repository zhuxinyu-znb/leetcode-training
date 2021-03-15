/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
    let left = new ListNode();
    let _left = left;
    let right = new ListNode();
    let _right = right;
    let cur = head;
    while(cur) {
        let next = cur.next;
        if(cur.val < x) {
            left.next = cur;
            left = left.next;
        } else {
            right.next = cur;
            right = right.next;
        }
        cur.next = null;
        cur = next;
    }
    left.next = _right.next;
    _right.next = null;
    return _left.next;
};
// @lc code=end

