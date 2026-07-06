/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

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

var reverseList = function (head) {
  //   let temp = head;
  //   let temp1 = null;

  //   while (temp) {
  //     let current = new ListNode(temp.val);
  //     current.next = temp1;
  //     temp1 = current;
  //     temp = temp.next;
  //   }
  //   return temp1;

  let temp = head;
  let prev = null;

  while (temp) {
    let nextNode = temp.next;
    temp.next = prev;
    prev = temp;
    temp = nextNode;
  }
  return prev;
};

console.log(reverseList(head));
