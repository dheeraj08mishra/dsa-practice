/*
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]
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

var rotateRight = function (head, k) {
  if (!head || !head.next || k == 0) return head;
  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    temp = temp.next;
  }
  k = k % count;
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = head;
  let newHead = slow.next;
  slow.next = null;

  return newHead;
};

console.log(rotateRight(head, 2));
