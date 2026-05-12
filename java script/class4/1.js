// let btn = document.querySelector("button")
// let body = document.querySelector("body")

// let isActive = true
// btn.addEventListener("click", function() {
//     // console.log("hello");
//     // body.style.backgroundColor= "black";

//     if(isActive === true ){
//         body.style.backgroundColor = "pink"
//         isActive = false;
//     } else {
//         body.style.backgroundColor = "green"
//         isActive = true;
//     }
// })

// btn.addEventListener("click", function() {
//     // console.log("hello");
//     // body.style.backgroundColor= "black";
//     body.classList.toggle('toggle')
// })

// let body = document.querySelector("body");
// let btn = document.querySelector("button");

// let h2 = document.querySelector("h2");

// btn.addEventListener("click", function () {
//     let data = prompt("enter user name");
//     h2.innerText = "hello " + data
//     h2.style.textAlign = "center"
//     body.appendChild(h2);
// })


// let data = prompt("enter user name");
// h2.innerText = "HELLO " + data;
// h2.style.textAlign = "center";
// body.appendChild(h2);




let body = document.querySelector("body");
let btn = document.getElementsByClassName("two"); // returns an array of all element with class two not one element so we have use indices to indicate click on specific elements

// let h2 = document.querySelector("h2");
let h2 = document.getElementById("one")


btn[0].addEventListener("click", function () {
    let data = prompt("enter user name");
    h2.innerText = "hello " + data
    h2.style.textAlign = "center"
    body.appendChild(h2);
})


// var g = 20; // global scopeed

// var a = 20;
// {
// var a = 10;
// }
// console.log(a);


// block scoped
// let b = 20;
// {
//     let b = 10;
// }
// console.log(b);



// function scope
// function sum() {
//     var c = 10;
//     console.log(c);
    
    
// }
// console.log(c);
// sum()





//  this 


// console.log(this); // window


// var name = "p1"

// window.name = ""

// let student = {
//     id: 1,
//     name: "piyush",
//     isPass: true,

//     sum: function () {
//         console.log(this); // object
        
//         console.log("hello");
//         console.log(this.name);


//         let s1 = ()=>{
//             console.log(this.name);    // object         
//         }
//         s1()
//     },

//     arrow: ()=>{
//         console.log(this); // window
        
//         // console.log(this.name); // name not in the window

//         console.log(this.name);
        
        
//     }

// }

// // for (let a in student) {
// //     console.log(student[a]);   
// // }

// student.sum();
// student.arrow()






// function outer() {
//     console.log("hello");

//     return 5
//     // do not run
//     console.log("hii");
// }

// outer()


// Closure - // inner get its own sperate copy of userName
//  closure in JavaScript is a function that "remembers" the environment in which it was created. 
// function outer() {
//     let userName = "hello"

//     function inner() {
//         console.log(userName);
//     }

//     // inner()
//     return inner
    
// }

// let fn = outer()
// fn()
// console.log(fn);