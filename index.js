// stack

// A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. 
// This means that the last element added to the stack is the first one to be removed. 
// Stacks are used in various algorithms and data processing tasks.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }

  // queue

  // A queue is another linear data structure that follows the First-In-First-Out (FIFO) principle. 
  // This means that the first element added to the queue is the first one to be removed. 
  // Queues are commonly used in tasks that require managing and processing items in a specific order.

  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      }
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  