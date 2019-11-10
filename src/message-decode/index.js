
const Stack = require('@datastructures-js/stack');
const Queue = require('@datastructures-js/queue');


/**
 * Transforms the message taking consecutively:
 *  - the first to the first
 *  - the second to the last
 *  - the third to the second
 *  - the fourth to the penultimate
 *  - etc
 * @param {string} msg message to transform
 * @returns {string} the message applying the first transformation
 * @complexity O(n)
 */
const firstTransformation = (msg) => {
    const stack = Stack();
    const queue = Queue();
    let transformedMsg = '';
    for (let i = 0; i < msg.length; i++) {
        const char = msg[i];
        if (i % 2 === 0) queue.enqueue(char);
        else stack.push(char);
    }

    while (!queue.isEmpty()) {
        transformedMsg += queue.dequeue();
    }

    while (!stack.isEmpty()) {
        transformedMsg += stack.pop();
    }
    return transformedMsg;
}

/**
 * Transforms the message reversing all consecutive characters until a vowel
 * @param {string} msg message to transform
 * @returns {string} the message applying the second transformation
 * @complexity O(n^2)
 */
const secondTransformation = (msg) => {
    const isVowel = (char) => /a|e|i|o|u/i.test(char);
    const stackToString = (stack) => {
        let stackString = '';
        while (!stack.isEmpty()) {
            stackString += stack.pop();
        }
        return stackString;
    }
    const stack = Stack();
    let transformedMsg = '';
    for (let i = 0; i < msg.length; i++) {
        const char = msg[i];
        if (!isVowel(char)) stack.push(char);
        else transformedMsg += stackToString(stack) + char;
    }

    return transformedMsg + stackToString(stack);
}

/**
 * Decodes an encoded message using 'Agent 0069' style.
 * @param {string} txt the string to be decoded
 * @returns {string} the message in plain text.
 * @complexity O(n^2)
 * @see Folder README.md for the exercise statement.
 * @author Alex Gonzalez
 */
module.exports = decodeMessage = (txt) => {
    return secondTransformation(firstTransformation(txt));
}