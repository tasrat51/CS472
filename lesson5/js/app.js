console.log("Hello JavaScript from external file");
var i = 9;
i = "Hello JS";
console.log(i);
// Dom API example
var helloText = document.getElementById("helloText");
helloText.innerText = "Welcome to DOM API";
// Lexical Environment/Execution Context/Scope
// Global Environment
var i = 0;
 var  j=9;


// yyy env
function sumNums(){
 j= 19;
 i = 1;
 console.log(j);
}
console.log(j);

// zzz env
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}