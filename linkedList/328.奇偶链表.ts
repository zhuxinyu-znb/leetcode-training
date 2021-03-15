/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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

function oddEvenList(head: ListNode | null): ListNode | null {
    let flag = true;
    let left = new ListNode();
    let _l = left;
    let right = new ListNode();
    let _r = right;
    let cur = head;
    while(cur) {
        let next = cur.next;
        if(flag) {
            left.next = cur;
            left = left.next
            flag = false;
        } else {
            right.next = cur;
            right = right.next;
            flag = true;
        }
        cur.next = null;
        cur = next;
    }
    left.next = _r.next;
    _r.next = null;
    return _l.next;
};
// @lc code=end

