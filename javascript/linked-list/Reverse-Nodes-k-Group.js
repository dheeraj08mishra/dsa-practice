/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
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

function hasKNodes(nodes, k) {
  let count = 0;
  while (nodes) {
    nodes = nodes.next;
    count++;

    if (count >= k) return true;
  }
  return false;
}
function reverseKNodes(node, k) {
  let dummy = new ListNode();
  dummy.next = node;
  let temp = dummy;
  let list = temp.next;

  for (let i = 0; i < k - 1; i++) {
    let temp1 = list.next;
    list.next = temp1.next;
    temp1.next = temp.next;
    temp.next = temp1;
  }
  return dummy.next;
}

var reverseKGroup = function (head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let groupPrev = dummy;

  while (hasKNodes(groupPrev.next, k)) {
    let groupTail = groupPrev.next;
    let newHead = reverseKNodes(groupTail, k);
    groupPrev.next = newHead;
    groupPrev = groupTail;
  }
  return dummy.next;
};

console.log(reverseKGroup(head, 2));
