/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    // 快慢指针
    let slow = head
    if (!head) return null
    let fast = head.next
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let mid = slow.next
    slow.next = null
    // 倒置后一个链表
    let dummy = new ListNode(0)
    dummy.next = mid
    let prev = null
    while (mid){
        let nxt = mid.next
        mid.next = prev
        prev = mid
        mid = nxt
    }
    //merge
    let l1 = head
    let l2 = prev
    while (l1 && l2){
        let nxt = l1.next
        l1.next = l2
        l2 = l2.next
        l1.next.next = nxt
        l1 = nxt
    }

    return head
};
// @lc code=end

