// string
//call bind apply

// let user1={
//     name:"om",
//     lastName:"tiwari",
//     fullName:function(){
//         console.log(this.name+this.lastName)
//     }
// }

// let user2={
//     name:"ram",
//     lastName:"singh"
// }

// user1.fullName.call(user2) //user2 object borrowing the function of user1


// let user1={
//     name:"om",
//     lastName:"tiwari",
//     fullName:function(city){
//         console.log(this.name+this.lastName+city)
//     }
// }

// let user2={
//     name:"ram",
//     lastName:"singh"
// }
// user1.fullName.call(user2,"bhopal")



// let obj={
//     id:1,
//     name:"om",
// }

// let user = obj //it will change the name of obj (call be refference(memory))
// user.name = "hello"
// console.log(user.name)
// console.log(obj.name)


let obj={
    id:1,
    name:"om",
}

let user = {...obj}
user.name = "hello"
console.log(user.name)
console.log(obj.name)

