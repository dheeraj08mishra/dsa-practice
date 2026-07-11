/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Input: head = [1,1,1,2,3]
Output: [2,3]
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var deleteDuplicates = function (head) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let temp = dummy.next;

  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      while (temp.next && temp.val === temp.next.val) {
        temp = temp.next;
      }
      prev.next = temp.next;
      temp = prev.next;
    } else {
      prev = temp;
      temp = temp.next;
    }
  }
  return dummy.next;
};
console.log(deleteDuplicates(head));
