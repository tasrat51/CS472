console.log("Hello JavaScript from external file");
var i = 9;
i = "Hello JS";
console.log(i);
// DOM API example
var helloText = document.getElementById("helloText");
helloText.innerText = "Welcome to DOM API";

// Lexical Environment/Execution Context/Scope
// global environment 
var i = 0;
// var j = 9;

// yyy env
function sumNums() {
    var j = 19;
    i = 1;
    console.log(j);
    // TODO
}
sumNums();
// console.log(j);

// zzz env
var array = [1,2,3];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

console.log(this);

