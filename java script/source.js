// js needs an compiler but we also have an inbuilt compiler in our browser
console.log("hello");
let btn = document.querySelector('button');
let body = document.querySelector('body');

btn.addEventListener("click",function(){
    body.style.backgroundColor='blue'
})