/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
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
var removeNthFromEnd = function (head, n) {
  /// two pass
  //   let count = 0;
  //   let temp = head;
  //   while (temp) {
  //     count++;
  //     temp = temp.next;
  //   }
  //   let senital = new ListNode();
  //   senital.next = head;
  //   let temp1 = senital;
  //   for (let i = 0; i < count - n; i++) {
  //     temp1 = temp1.next;
  //   }
  //   temp1.next = temp1.next.next;
  //   return senital.next;
  // single pass

  let temp = head;
  let temp1 = head;
  for (let i = 0; i < n; i++) {
    temp1 = temp1.next;
  }
  while (temp1.next) {
    temp = temp.next;
    temp1 = temp1.next;
  }
  if (!temp1) return;
  temp.next = temp.next.next;
  return head;
};

console.log(removeNthFromEnd(head, 2)); //[1,2,3,5]
