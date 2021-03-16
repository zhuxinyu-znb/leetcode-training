/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let p = dummyHead;
    let q = dummyHead;
    for(let i = 0; i < n + 1; i ++) {
        q = q.next;
    }
    while(q !== null) {
        p = p.next;
        q = q.next;
    }
    let next = p.next;
    p.next = next.next;
    next.next = null;
    return dummyHead.next;
};
// @lc code=end

