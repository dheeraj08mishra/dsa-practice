/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false

*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

var isPalindrome = function (head) {
  let temp = head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow;
  let prev = null;

  while (mid) {
    let nextNode = mid.next;
    mid.next = prev;
    prev = mid;
    mid = nextNode;
  }

  while (temp && prev) {
    if (temp.val !== prev.val) {
      return false;
    }
    temp = temp.next;
    prev = prev.next;
  }
  return true;
};

console.log(isPalindrome(head));
