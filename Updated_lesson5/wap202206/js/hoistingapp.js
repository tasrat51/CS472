/**
 * hoistingapp.js
 */
// "use strict";

// a = 5;
function b() {
    a = 5; // Implied global
}

b();
console.log(a);

// a = 5;
// console.log(a);
// let a = 15;
// var a;
// a = 5;
// console.log(a);

// b();
// Function declaration
// function b() {
//     console.log("Function b is called");
// }
// Function expression
// var b = function() {
//     console.log("Function b is called");
// };

// Variable declaration keywords
// ES/JS versions 1.0 --- 5.0
// var a;
// ES/JS version 6.0 ----- 2022
let aa;
const aaa = 0;