sum();
function sum() {
    var y = 0;
    console.log(y);
}

let x = 0;
console.log(x);

// Hoisting
// In memory
// x:undefined - var
// sum: func

let f = 1;
f = "Anna";
console.log(f);

let n = 1;
let n2 = new Number(1);

// Control flow statements
// for...loop
const nums = [1,2,3];
// Task: write code to compute the sum of nums
// Using for...loop
let sum = 0;
for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);

// Using while...loop
let sum = 0;
let i = 0;
while(i < nums.length) {
    sum += nums[i];
    i++;
}
console.log(sum);

do {
    //
    i++;
} while(i < nums.length)