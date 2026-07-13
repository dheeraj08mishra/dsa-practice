/*
Implement a last-in-first-out (LIFO) stack using only two queues. 
The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
*/

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};
MyStack.prototype.push = function (x) {
  this.queue2.push(x);
  while (this.queue1.length) {
    this.queue2.push(this.queue1.shift());
  }
  this.queue1 = this.queue2;
  this.queue2 = [];
};

MyStack.prototype.pop = function () {
  if (this.queue1.length) {
    return this.queue1.shift();
  }
};

MyStack.prototype.top = function () {
  if (this.queue1.length) {
    return this.queue1[0];
  }
};

MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(2);
obj.push(4);
obj.push(5);

console.log(obj);
