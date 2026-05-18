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