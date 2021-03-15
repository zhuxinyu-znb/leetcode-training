/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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
  let _head = new ListNode();
  _head.next = head;
  let flag = false;
  let cur = head;
  let pre = _head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      flag = true;
      let next = cur.next;
      cur.next = next.next;
      next.next = null;
    } else {
      if (flag) {
        flag = false;
        let next = cur.next;
        cur.next = null;
        cur = next;
        pre.next = cur;
      } else {
        pre = cur;
        cur = cur.next;
      }
    }
  }
  if (flag) {
    flag = false;
    let next = cur.next;
    cur.next = null;
    cur = next;
    pre.next = cur;
  }
  return _head.next;
}
// @lc code=end
