let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let data = JSON.parse(localStorage.getItem("data"))
console.log(data,"data")
if(data){
    h1.innerText = data.name
    h2.innerText = data.email
}

let btn = document.querySelector("#bt");
btn.addEventListener("click",(e)=>{
        localStorage.removeItem("data")
})


let form = document.querySelector("#formData");
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let userData={
        name:form[0].value,
        email:form[1].value,
        password:form[2].value
    }
localStorage.setItem('data',JSON.stringify(userData));

})

let loginF = document.querySelector("#logInData")
loginF.addEventListener("submit",(e)=>{
    e.preventDefault()
    let logInInfo = JSON.parse(localStorage.getItem("data"))
    let loginInput={
        email:loginF[0].value,
        password:loginF[1].value

    }
    if(loginInput.email===logInInfo.email&&loginInput.password===logInInfo.password){
        alert("log in done")
    }else{
        alert("Wrong input")
    }
})