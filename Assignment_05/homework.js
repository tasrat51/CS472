/**
 * homework.js
 * @author Tirhas Asrat
 * since 2022-06-01
 */
"use strict";

// 1.	Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
 function Max(num1,num2){
     let max;
   if(num1>num2)  {
       max = num1
   }else{
       max = num2;
   }
   return max;
 }
 const num1 = 20;
 const num2 = 30;
 const maxOutPut = Max(num1,num2);
 console.log("The max of " + num1 +  " and " + num2 + " is:" +maxOutPut)

 // 2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

 function MaxOfThree(number1,number2,number3){
         let max1;
     if(number1>number2 && number1>number3){
           max1 = number1;
     } else if(number2> number1 && number2>number3 ){
         max1 = number2;

      }else {
          max1 = number3;        
  }    
  }
     const number1= 20;
     const number2 = 30;
     const number3 = 40;
     const maxOut = MaxOfThree(number1,number2,number3)
     console.log(" The max of " + number1 + " , " + number2 + " and " + number3 + " is: " + maxOut)

      // 3.	Write a function isVowel() that takes a character (i.e. a string of length 1)
      // and returns true if it is a vowel, false otherwise.

  function isVowel(x){
    var result ;

   if(x == "a" || x == "e" || x == "i" || x == "o" || x== "u") {
       
      result =  true;
   }else{
        result = false;
   }
   return result;
} 
   const x = "a";
   const OutPut = isVowel(x);
   console.log(" Is it a vowel ? " +  OutPut);

 //4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) 
 //all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, 
 //and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

 function Sum(nums){
     let sums = 0;;
   for (let index = 0; index < nums.length; index++) {
       sums += nums[index];    
   } 
 return sums;
 }

 let nums = [1,2,3,4]
  let  arrayNum = Sum(nums)
 
 console.log(" Sum of 1,2,,3,4 " + " is: " +arrayNum);

 function Multiply(numbers){
    let num = 1;
    for (let index = 1; index< numbers.length; index++) {
        num *= numbers[index];     
    }
   return num;
 }
 let numbers = [1,2,3,4];
 let multArray = Multiply(numbers)
 console.log("Product of 1,2,3,4 " + " is: " + multArray);

 //5.	Define a function reverse() that computes the reversal of a string. 
 //For example, reverse("jag testar") should return the string "ratset gaj".

 function reverse(rev){
    let s = " ";

    for (let i = rev.length-1; i>=0; i--) {
        s += rev[i];
        
    }
  return s;
 }

 let rev = " jag testar";
 let revers = reverse(rev);
 console.log(" The reversed word of jag tester is: " + revers);

 //6.Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

 function findLongestWord(longest){
   let longestword = " ";
   for (let i = 0; i < longest.length; i++) {
       if(longest[i]> longestword)
       longestword = longest[i];    
   }
    return longestword;
 }

 let longest = [" hello " ," bye " , " welcome "];
 let long = findLongestWord(longest);
  console.log(long);

 // 7.	Write a function filterLongWords() that takes an array of words and an integer i and 
 // returns a new array containing only those words that were longer than i characters.

 function filterLongWords(a,b){
     let filtered = []

     for (let i= 0; i < a.length; i++) {
         if(a[i].length > b)
         filtered.push(a[i]);
     }
     return filtered;
  }
   console.log(filterLongWords([" Terry ", " Siku ", " Fevi "],2));

//8.Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and 
//returns the sum of the squares of each number in the input array. E.g. 
//computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 +3^2 = 14. Note:
// Write your Javascript code without using Imperative programming. i.e.
// Do NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(f){
  let sumis = 0;
  let i = f.length;
  while (i--)
  sumis+= Math.pow(f[i],2)
  return sumis;
}
console.log(computeSumOfSquares([1,2,3]));
  
//9.Write a function named, printOddNumbersOnly, that takes as input, 
//an array of integral numbers and it finds and prints only the numbers which are odd.

function printOddNumbersOnly(arrayOfNum){

   let odd = [];
  
  for (let i = 0;i < arrayOfNum.length;i++) {
    if(arrayOfNum[i] % 2 != 0){
    
     odd.push(arrayOfNum[i]);
     console.log(odd);
    }
 //return odd;
  
}
}

  let arrayOfNum = [1,2,3,4,5]
  let odds = printOddNumbersOnly(arrayOfNum)
  console.log(odds);

//10.Write a function named, computeSumOfSquaresOfEvensOnly, 
//that takes as input, an array of integral numbers and calculates and returns 
//the sum of the squares of only the even numbers in the input array. E.g. 
//computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.

// using map
function computeSumOfEvenSquares(x) {
    return x.filter(a=>a%2==0).map(a=>a*a).reduce((a,b)=>a+b,0);
    } console.log(computeSumOfEvenSquares([1,2,3,4]));

  //  11.	Using the Array.reduce(…) function, re-implement your functions, 
  //sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. 
  //i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 

  function sum2(x) {
    return x.reduce((x,y)=>x+y,0);
    } console.log(sum2([1,2,3,4])); // multiply
    function mulitiply2(x) {
    return x.reduce((x,y)=>x*y,1);
    } console.log(mulitiply2([1,2,3,4]));

  //// problem 12
/* 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and
finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12.
(Note: Do not use sorting!) */
function findSecondBiggest(a){ let maxindex=0;
    let max=0;
    for(let i=0; i<a.length;i++){ if(a[i]>max){
    max=a[i];
    maxindex=i;
    }
    }
    let secmax=0;
    for(let j=0;j<a.length;j++){ if(a[j]>secmax && j!=maxindex)
    secmax=a[j];
    }
    return secmax;
    } console.log(findSecondBiggest([1,2,3,4]));
      
    
// problem13
/* 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence,
e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1),
prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1),
prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).*/ 

function printfibo(x,y,z){
for(let i =1;i<=x;i++){ console.log(y + " ");
let sumOfPrevTwo = y+ z;
y= z;
z = sumOfPrevTwo;
}
} console.log(printfibo(1,2,3,4));

