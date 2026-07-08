/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
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

let head1 = new ListNode(3);
head1.next = new ListNode(4);
head1.next.next = new ListNode(5);
head1.next.next.next = new ListNode(5);
head1.next.next.next.next = new ListNode(6);
var addTwoNumbers = function (l1, l2) {
  let senital = new ListNode();
  let temp = senital;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = sum + carry;
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    let carry = Math.floor(sum / 10);

    temp.next = new ListNode(sum % 10);
    temp = temp.next;
  }
  return senital.next;
};
