const arr = [
'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1637781930945-090e6672b750?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1503925802536-c9451dcd87b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlZXB5fGVufDB8fDB8fHww'
]
let img = document.querySelector("img");
let num = 0;
setInterval(()=>{
    img.setAttribute('src',arr[num])
    num = (num+1)%arr.length;
},500)

