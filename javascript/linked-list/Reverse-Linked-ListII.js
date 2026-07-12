/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var reverseBetween = function (head, left, right) {
  let dummy = new ListNode();
  dummy.next = head;
  let temp = dummy;

  for (let i = 0; i < left - 1; i++) {
    temp = temp.next;
  }
  let list = temp.next;

  for (let i = 0; i < right - left; i++) {
    let temp1 = list.next;
    list.next = temp1.next;
    temp1.next = temp.next;
    temp.next = temp1;
  }
  return dummy.next;
};

console.log(reverseBetween(head, 2, 4));
