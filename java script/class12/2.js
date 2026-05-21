// pure function->same output when called again with same paremeter
function double(num){
    return num*2
}

console.log(double(5))
console.log(double(5))

//impure -> different output on same call
let count = 0;
function fun1(){
    count++
    return count
}

fun1()
fun1()

//function currying --------------------------------------

// function sum(b){
//     return function(a){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(1)(2)(3))

function sum1(a){
    return function(b){
        if(b){
            return sum1(a+b)
        }
        return a 
    }
}

console.log(sum1(1)(2)(3)(5)(9)(4)(5)())
    
//spreading-----------------------------------------
let arr = [1,2,3,4,5]
let nums = [...arr,6,7,8]
console.log(nums)

//------------------------------------------------
let num 

function multiple_args(a,b,c,...num){
console.log(arguments)
}
multiple_args(3,4,5,4,3,2,3,5,7,7)

//----------------------------------------------
let arrr = [1,2,3,4,5,6,7,8,9]
let [a,b,c,d,e,f,g,h] = arrr
console.log(a)
console.log(b)
console.log(c)
//---------------------------------------------------
let obj={
    id:1,
    name:"om",
}

let {id,name}=obj
console.log(id)