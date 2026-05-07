// GEC(Global Execution contest)->how the code is executed

//functions
// function sum(){
//     console.log("ram ram");
// }

// sum();

// function sum1(a,b){
//     console.log(a+b);
// }

// sum1(3,4);

//arrow function
// let sum=()=>{
//     console.log("ram Ram");
// }
// sum();

//-------------Hoisting--------------------

// console.log(a)
// let a = 5; //this will create problem 

// js has some default behaviour according to which it changes the particular code
//according to the some different behaviour of js

// console.log(a)
// var a = 5;//ans undefined

// above code will be treated as given below

// var a
// console.log(a)
// a=5


// "Hoisting occurs for all three (var, let, const).
// But only var is forgiving — it gives undefined.
// let and const are strict — they throw ReferenceError because of the Temporal Dead Zone."

// console.log(x);   // undefined     ← var is forgiving
// var x = 10;

// console.log(y);   // ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// console.log(z);   // ReferenceError
// const z = 30;

// → It's not that hoisting "corrects" only var.
// It's that only var gets initialized with undefined during hoisting.
// let and const are hoisted but deliberately kept uninitialized for safety (to prevent bugs).
// This strict behavior for let and const was introduced in ES6 because using variables before declaration often led to hard-to-find bugs with var.

// All declarations are hoisted.
// var → Hoisted + initialized (undefined)
// let/const → Hoisted + Temporal Dead Zone → Error if accessed early


// =============================================
//   HOISTING IN JAVASCRIPT - ALL BEST EXAMPLES
// =============================================

/* ==================== 1. Basic var Hoisting ==================== */
console.log("1. var Hoisting:");
console.log(a);
var a = 10;
console.log(a);
/*
Output:
undefined
10
Explanation: var declaration is hoisted and initialized with undefined.
*/


/* ==================== 2. let & const (Temporal Dead Zone) ==================== */
console.log("\n2. let Hoisting:");
console.log(x);   // Error
let x = 20;
/*
Output: ReferenceError: Cannot access 'x' before initialization
Explanation: let and const are hoisted but not initialized (TDZ).
*/


/* ==================== 3. Function Declaration ==================== */
console.log("\n3. Function Declaration:");
sayHello();

function sayHello() {
    console.log("Hello World");
}
/*
Output: Hello World
Explanation: Function declarations are fully hoisted.
*/


/* ==================== 4. Function Expression with var ==================== */
console.log("\n4. Function Expression:");
greet();

var greet = function() {
    console.log("Hello");
};
/*
Output: TypeError: greet is not a function
Explanation: Only declaration is hoisted, not the assignment.
*/


/* ==================== 5. Hoisting Inside Function (Very Important) ==================== */
console.log("\n5. Hoisting inside function:");
var num = 100;

function test() {
    console.log(num);     // undefined
    var num = 200;
    console.log(num);     // 200
}
test();
/*
Output:
undefined
200
Explanation: Local var shadows global variable due to hoisting.
*/


/* ==================== 6. let creates TDZ in function ==================== */
console.log("\n6. let TDZ Example:");
let globalVar = 10;

function demo() {
    console.log(globalVar);   // Error
    let globalVar = 20;
}
demo();
/*
Output: ReferenceError
Explanation: Local let creates TDZ for entire function.
*/


/* ==================== 7. Block Scope ==================== */
console.log("\n7. Block Scope:");
{
    console.log(blockVar);
    let blockVar = 50;
}
/*
Output: ReferenceError
*/


/* ==================== 8. Classic Interview: var vs let in Loop ==================== */
console.log("\n8. Loop Hoisting Interview Question:");

// Uncomment one at a time

// With var → Output: 3 3 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }

// With let → Output: 0 1 2
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
// }


/* ==================== 9. Advanced Nested Example ==================== */
console.log("\n9. Advanced Nested Hoisting:");

var value = 1;

function outer() {
    console.log(value);        // 1
    
    function inner() {
        console.log(value);    // undefined
        var value = 3;
        console.log(value);    // 3
    }
    inner();
    console.log(value);        // 1
}

outer();
/*
Output:
1
undefined
3
1
*/