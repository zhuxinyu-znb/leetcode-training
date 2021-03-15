/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let res = new ListNode(0);
    res.next = head;
    let cur = res;
    while(cur.next) {
        if(cur.next.val === val) {
            let next = cur.next;
            cur.next = cur.next.next;
            next.next = null;
        } else {
            cur = cur.next;
        }
    }
    let _res = res.next;
    res.next = null;
    return _res;
};
// @lc code=end

