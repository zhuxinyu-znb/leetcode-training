/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let cur = head;
    while(cur && cur.next) {
        let next = cur.next;
        if(next.val === cur.val) {
            cur.next = cur.next.next;
            next.next = null;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
// @lc code=end

