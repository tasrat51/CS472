/**
 * 
 */
  // determine the output
 x = 1;
  var a = 5;
  var b = 10;
  var c = function(a,b,c) {
   console.log(x);
    console.log(a);
    var f = function(a,b,c)  {
b = a;
console.log(b);
b = c;
var x = 5;
console.log(x);
   }
  // console.log(x);
 f(a,b,c);
 console.log(b);
 var x = 10;
}

c(8,9,10)
console.log(b);
console.log(x);
    
  // what will be printed
  var x = 9;
  function myFunction(){
      return x * x;     
  }
  console.log(myFunction());
  x = 5;
  console.log(myFunction());
  x = 6
  console.log(myFunction());
  
 // what will be printed

 var foo = 1;
 function bar(){
  if (!foo){
   //  alert(foo)
    var foo = 10;
  }
  alert(foo);
 }
 bar();

// what will be the output
var add = (function(){
 var counter = 0;
 return function (){
    return counter +=1; 
 }
 
})();


 
