/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

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

var mergeTwoLists = function (list1, list2) {
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

console.log(mergeTwoLists(head, head1));
