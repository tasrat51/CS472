// app_fnex.js 

f();
// g();

function f() {
    console.log("called f");
}

var g = function() {
    console.log("called g");
}

g();

function a(){
 var x;
}

function b(){
  var x = 20;
a();
//console.log(x);
}

var x= 30
b();

console.log(x);