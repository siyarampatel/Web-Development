// syncronous and asyncronous
// setTimeout(()=>{
//     console.log("c");
// },10)

// setTimeout(()=>{
//     console.log("b");
// },0)

// console.log("a")


// Call Stack  <-- Event Loop <-- Callback Queue
//        ^
//        |
//    Web APIs

//--------------------call back(hell or chaining)---------------------------------------------
// function step1(fn){
//     setTimeout(()=>{
//         console.log("Select...");
//         fn();
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log("Edit...");
//         fn();
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log("Post...");
//         fn();
//     },3000)
// }
// function step4(){
//     console.log("Done");
// }

// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// })

// //-------------------promises-----------------------------

// let p = new Promise((resolved,rejected)=>{
//     // resolved()
//     rejected()
// })
// p.then(()=>{        //then will be called if promise fulfilled other wise catch
//     console.log("Work Done")
// }).catch((error)=>{
//     console.log(error)
// })

//---above example through promises--------------------------

// function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Select")
//             resolve()
//         },5000)
//     })
// }

// function step2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Edit")
//             resolve()
//         },4000)
//     })
// }


// function step3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Upload")
//             resolve()
//         },3000)
//     })
// }

// step1().then(()=>{
//     return step2().then(()=>{
//             return step3().then(()=>{

//             })
//     })
// })

//-------------------async(best solution)---------------------
function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Select")
            resolve()
        },5000)
    })
}

function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Edit")
            resolve()
        },4000)
    })
}


function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Upload")
            resolve()
        },3000)
    })
}

 async function call(){
  await  step1()
  await  step2()
}
call()
