//shallow copy-------------------------------------------
let obj={
    id:1,
    name:"om",
    adress:{
        city:"delhi"
    }
}

let user={...obj} //here it will pass reffrece of address part(not of whole that is only single layer) otherwise it passes the whole reffrence(its nature)
user.adress.city="goa"
console.log(user.adress.city)
console.log(obj.adress.city)
//when we write {...} it spreads the data but in shalow copy when we use it copies object for first layer but it copies reffrence for second layer
//but in deep copy it copies the whole object

//deep copy-------------------------------------
let obj1={
    id:1,
    name:"om",
    adress:{
        city:"delhi"
    }
}

let user1=structuredClone(obj1) //deep copy - whole object will be copied not refference
user1.adress.city="goa"
console.log(user1.adress.city)
console.log(obj1.adress.city)

