/**
 * app.js
 */
"use strict";

const sum = 1 + 2;
const output1 = "Sum is " + sum;
const output2 = `Sum is ${sum}`;
console.log(output1);
console.log(output2);

// Multi-line string
// Old way -- using concat
const s3 = "This is line1\nThis is line2";

const multiLineString = `
    This is line 1
    This is line 2
`;
console.log(multiLineString);
// Literal
const s = "This is a literal string";
const s2 = new String("This is an object of type String");
const student = {
    firstName: "Anna"
};
