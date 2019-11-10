
const Stack = require('@datastructures-js/stack');
const Queue = require('@datastructures-js/queue');

/**
 * Determines if a string is a palindrome
 * @param {string} txt the string to be processed
 * @returns {boolean} true if the input string is a palindrome. false o.c.
 * @complexity O(n)
 * @see Folder README.md for the exercise statement.
 * @author Alex Gonzalez
 */
module.exports = isPalindrome = (txt) => {
    const queue = Queue();
    const stack = Stack();
    let found = false;
    for (let i = 0; i < txt.length; i++) {
        const char = txt[i];
        stack.push(char);
        queue.enqueue(char);
    }

    while(!found && !queue.isEmpty()){
        found = queue.dequeue() === stack.pop();
    }

    return found
}