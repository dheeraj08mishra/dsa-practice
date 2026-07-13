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
  this.queue = [];
};
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  let n = this.queue.length;
  while (n - 1) {
    this.queue.push(this.queue.shift());
    n--;
  }
};

MyStack.prototype.pop = function () {
  if (this.queue.length) {
    return this.queue.shift();
  }
};

MyStack.prototype.top = function () {
  if (this.queue.length) {
    return this.queue[0];
  }
};

MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(2);
obj.push(4);
obj.push(5);

console.log(obj);
