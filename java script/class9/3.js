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

