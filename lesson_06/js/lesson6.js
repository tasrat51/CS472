/**
 * lesson6.js
 * 
 */
"use strict";

console.log("lesson 6");
console.log(window);
console.log(this);
// window.alert("This is lesson6");

// const lesson6Title = document.getElementById("lesson6Title");
// const lesson6Title = document.querySelector("#lesson6Title");
// lesson6Title.onclick = changeColor;
// lesson6Title.addEventListener("click", changeColor);

// function changeColor(event) {
//     console.log(lesson6Title);
//     console.log(event);
//     lesson6Title.style.color = "red";
// }
// changeColor();

// Using anonymous function
// lesson6Title.addEventListener("click", function() {
//     lesson6Title.style.color = "red";
// });

// Using arrow function
// lesson6Title.addEventListener("click", () => {
//     lesson6Title.style.color = "red";
// });

// Not polluting the global env/namespace
window.onload = function() {
    function changeColor(event) {
        console.log(lesson6Title);
        console.log(event);
        // lesson6Title.style.color = "red";
        lesson6Title.className = "clickedTitle";
    }
    const lesson6Title = document.getElementById("lesson6Title");
    lesson6Title.addEventListener("click", changeColor);
};

function getAlert(str) {
    return function() {
        alert(str);
    }
}

const functionShowAlert = getAlert("Hello first class function");
// functionShowAlert();

// Higher-order functions - Array methods
// Array.reduce -- seen

// Array.map
const elements = ["Hydrogen", "Helium", "Lithium"];
// const elementsLengths = elements.map(function(elementName){
//     return elementName.length;
// });
const elementsLengths = elements.map(elementName => elementName.length);
console.log(elementsLengths);

// for loop constructs
// classic for...loop
// classic while...loop

// for...in

// for...of

// using Array.forEach
elements.forEach(element => console.log(element));


// Timer events and setTimeout, setInterval Global functions
// function displayParagraph() {
//     alert("hola");
// }
// const timerObj = setTimeout(displayParagraph(), 5000);

function sumArgs() {
    let sum = 0;
    // for(let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    // for(const i in arguments) {
    //     sum += arguments[i];
    // }

    for(const n of arguments) {
        sum += n;
    }
    return sum;
}
console.log(`The sum of "[]" is ${sumArgs()}`);
console.log(`The sum of [1] is ${sumArgs(1)}`);
console.log(`The sum of [1,2] is ${sumArgs(1,2.5)}`);

const s = "abc";
const r = [...s];
console.log(r);
const person = {
    id: 1001,
    firstName: "Anna",
    isGraduate: true
};
const personClone = {...person};
console.log(personClone);

const currentDateTime = new Date();
console.log(currentDateTime);