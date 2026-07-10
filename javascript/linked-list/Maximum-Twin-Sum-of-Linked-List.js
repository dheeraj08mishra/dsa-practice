/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6.
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
head.next.next.next.next.next = new ListNode(6);

var pairSum = function (head) {
  let temp = head;
  let slow = temp;
  let fast = temp;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let list = slow;
  let prev = null;

  while (list) {
    let nextnode = list.next;
    list.next = prev;
    prev = list;
    list = nextnode;
  }
  let sum = 0;
  while (prev) {
    sum = Math.max(prev.val + temp.val, sum);
    temp = temp.next;
    prev = prev.next;
  }

  return sum;
};

console.log(pairSum(head));
