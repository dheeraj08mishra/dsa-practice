/*
Given the head of a singly linked list, return the middle node. If two middle nodes exist, return the second one.
1->2->3->4->5 → returns node with val 3
1->2->3->4->5->6 → returns node with val 4
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

let middleNode = function (head) {
  // 2 pass now
  //   let temp = head;
  //   let count = 0;
  //   while (temp) {
  //     count++;
  //     temp = temp.next;
  //   }

  //   let temp1 = head;

  //   let nodesToTravel = count % 2 === 0 ? count / 2 : Math.floor(count / 2);
  //   while (temp1 && nodesToTravel > 0) {
  //     temp1 = temp1.next;
  //     nodesToTravel--;
  //   }
  //   return temp1;

  // one pass using slow and fast pointer

  let temp = head;
  let slow = temp;
  let fast = temp;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log(middleNode(head));
