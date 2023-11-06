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

  // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
  // An input string is valid if the brackets are closed in the correct order.

  function isValid(s) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (char in bracketPairs) {
            stack.push(char); // Push opening brackets onto the stack
        } else {
            if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
                return false; // Mismatched brackets or extra closing bracket
            }
        }
    }
    
    return stack.length === 0; // If stack is empty, all brackets were correctly matched
}

// Test cases
console.log(isValid("{[]}")); // true
console.log(isValid("([)]")); // false

// Write a JavaScript function that takes a string as input and uses a stack to reverse the string. 
// The function should return the reversed string.

function reverseString(input) {
  const stack = [];
  let reversedString = '';

  for (const char of input) {
    stack.push(char);
  }

  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

function isBalancedParentheses(input) {
  const stack = [];
  const openingBrackets = '({[';
  const closingBrackets = ')}]';

  for (let char of input) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpenBracket = stack.pop();
      if (!lastOpenBracket || openingBrackets.indexOf(lastOpenBracket) !== closingBrackets.indexOf(char)) {
        return false; // Unmatched closing bracket
      }
    }
  }

  // If the stack is empty, the parentheses are balanced
  return stack.length === 0;
}

// Examples
console.log(isBalancedParentheses('()')); // true
console.log(isBalancedParentheses('(()())')); // true
console.log(isBalancedParentheses('())(')); // false

  