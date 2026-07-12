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

let swapInPair = function (head) {
  if (!head || !head.next) return head;
  let prev = new ListNode();
  let dummy = prev;
  let first = head;
  let second = head.next;
  while (first && second) {
    prev.next = second;
    first.next = second.next;
    second.next = first;
    prev = first;
    first = prev.next;
    second = first && first.next;
  }
  return dummy.next;
};

console.log(swapInPair(head));
