/**
 * js_exec_cntx_demo_app.js
 */
"use strict";

// function a() {
//     var x;
// }

// function b() {
//     var x = 20;
//     a();
// }

// var x = 30;
// b();
// console.log(x); // What value is printed for x?

function a1() {
    for(var x = 1; x < 10; x++) {
        console.log(x);
    }
    console.log(x);
}
a1();

function a2() {
    for(let x = 1; x < 10; x++) {
        console.log(x);
    }
    console.log(x);
}
a2();

// Variable versus Constant
var firstName = "Anna";
firstName = "Annalise";

let lastName = "Smith";
lastName = "Jones";

// Constant
const MIDDLE_NAME = "L";
// MIDDLE_NAME = "L";
const ADDRESS = {
    street: "1000 N Court Street",
    city: "Fairfield"
};
ADDRESS.city = "Fairfield, IA";
ADDRESS = {
    //
};
Object.freeze(ADDRESS);
ADDRESS.city = "Fairfield, IA";

const employee = {
    firstName: "John",
    lastName: "Adam",
    hireDate: new Date("2001,11,12")
};
const numbers = [1,2,3];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}