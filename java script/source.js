// js needs an compiler but we also have an inbuilt compiler in our browser
let btn = document.querySelector('button');
let body = document.querySelector('body');
let isDark=true;

// btn.addEventListener("click",function(){
//     body.style.backgroundColor='blue'
// })

btn.addEventListener("click",function(){
    if(isDark){
        body.style.backgroundColor='black'
    }
    else{
        body.style.backgroundColor='white'
    }
    isDark=!isDark
})