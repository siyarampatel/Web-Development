//API

let h2 = document.querySelector("h2")
fetch("https://jsonplaceholder.typicode.com/todos")
.then((data)=>{
    return data.json()
}).then((val)=>{
    console.log(val);
     h2.innerText=val[9].title
}).catch((err)=>{
    console.log(err)
})