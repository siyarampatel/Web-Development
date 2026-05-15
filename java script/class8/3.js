let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("#list");

let apiK='9f6290d6cda9a36a63755fadee71f83d'


btn.addEventListener("click",()=>{
    let data = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${apiK}`).then((info)=>{
        return info.json();
    }).then((val)=>{
        console.log(val);

    let h1 = document.querySelector("h1")
    h1.innerText=val.name;
    list.appendChild(h1);
    let p = document.createElement("p");
    p.innerText = `
    City: ${val.name}
    Temperature: ${val.main.temp}
    Humidity: ${val.main.humidity}
    `;

    list.appendChild(p);       
})
})

