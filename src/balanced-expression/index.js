
const Stack = require('@datastructures-js/stack');


/**
 * Determines if an expression is balanced on parenthesis
 * @param {string} txt the string to be processed
 * @returns {boolean} true if the input string is balanced. false o.c.
 * @complexity O(n)
 * @see Folder README.md for the exercise statement.
 * @author Alex Gonzalez
 */
module.exports = isBalanced = (txt) => {
    const stack = Stack();
    const openExp = /\[|\(|\{/;
    const closeExp = /\]|\)|\}/;
    const closeRelation = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    let isBalanced = true;
    let i = 0

    while (isBalanced && i < txt.length) {
        const char = txt[i];
        if (openExp.test(char)) stack.push(char);
        else if (closeExp.test(char)) isBalanced = stack.pop() === closeRelation[char];
        i++
    }

    return isBalanced && stack.isEmpty();
}