/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let lastSorted = head;
    let cur = head.next;
    while(cur !== null) {
        if(lastSorted.val <= cur.val) {
            lastSorted = lastSorted.next;
        } else {
            let pre = dummyHead;
            while(pre.next.val <= cur.val) {
                pre = pre.next;
            }
            lastSorted.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
        }
        cur = lastSorted.next;
    }
    let res = dummyHead.next;
    dummyHead.next = null;
    return res;
};
// @lc code=end

