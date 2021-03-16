/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let p = dummyHead;
    while(p.next && p.next.next) {
        let node1 = p.next;
        let node2 = node1.next;
        let next = node2.next;
        p.next = node2;
        node1.next = next;
        node2.next = node1;
        p = node1;
    }
    let res = dummyHead.next;
    dummyHead.next = null;
    return res;
};
// @lc code=end

