/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

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

var reorderList = function (head) {
  let temp = head;
  let slow = temp;
  let fast = temp;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the slow
  let middle = slow;
  let previous = null;
  while (middle) {
    let nextNode = middle.next;
    middle.next = previous;
    previous = middle;
    middle = nextNode;
  }
  let secondHalfList = previous;
  let firstPartList = head;

  while (secondHalfList.next) {
    let temp1 = firstPartList.next;
    let temp2 = secondHalfList.next;
    firstPartList.next = secondHalfList;
    secondHalfList.next = temp1;
    firstPartList = temp1;
    secondHalfList = temp2;
  }
  return head;
};

console.log(reorderList(head));
