/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

let MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

let Node = function (val) {
  this.val = val;
  this.next = null;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return -1;
  let temp = this.head;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  for (let i = 0; i < index - 1; i++) {
    temp = temp.next;
  }

  let newNode = new Node(val);
  newNode.next = temp.next;
  temp.next = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) {
    this.addAtHead(val);
    return;
  }
  let newNode = new Node(val);
  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = newNode;
  this.size++;
  return this.head;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  this.size--;
};
