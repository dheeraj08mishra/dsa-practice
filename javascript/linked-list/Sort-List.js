/*
Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(4);

let sortList = function (head) {
  if (!head || !head.next) return head;
  let temp = head;
  let slow = temp;
  let fast = temp;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let sortedLeft = sortList(head);
  let sortedRight = sortList(slow);
  return mergeTwoLists(sortedLeft, sortedRight);
};

let mergeTwoLists = function (list1, list2) {
  let mergeList = new ListNode();
  let temp = mergeList;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }
    temp = temp.next;
  }
  if (list1) {
    temp.next = list1;
  }
  if (list2) {
    temp.next = list2;
  }

  return mergeList.next;
};

console.log(sortList(head));
