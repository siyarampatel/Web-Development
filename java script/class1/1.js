// console.log("hello");
// var->can be redeclared,also value can be change
// let->cannot be redeclared,but values can be Change 
// const->value is fixed cannot change

// var a = 5;
// a=6;
// console.log(a)

// var a = 5;
// var a=6;            //can be redeclared and reassigned
// console.log(a)

// let b = 5;
// console.log(b);
// b=6;             //cannot be redeclared but can be reassigned
// console.log(b);

// const c=6;
// console.log(c);
// // c=7;   //value cannot be reassigned and redeclared
// // console.log(c);

// console.log(a)//a is not defined(not declared) error - a is an variable

// a=5
// console.log(a); // a is defined -> no error


// let a
// console.log(a)  //declared but no atual value -> undefined

// console.log(5===5);//both data and type are matched
// console.log(5==5);// only data is matched

// console.log(5+"5");//concat->string
// console.log(5-'5');//opposite string converts to nember

// console.log(typeof(typeof(5)))

// console.log(x);   // ReferenceError: x is not defined  ← never declared

// let y;
// console.log(y);   // undefined  ← declared but no value assigned

// let z = null;
// console.log(z);   // null  ← explicitly set to empty

// nullYou — intentionally marking something as empty

// when we have to strore unique value -> symbol

// let a = Symbol('id');
// let b = Symbol('id');
// console.log(a=b)

//// Non premitive

// let arr = [1,2,3,4,5,true,"hii",4.5,]
// console.log(arr)

// let a = []; 
// let b = [];
// console.log(a==b);//they are refrences so they are not gettting compared their 
//                   //address is getting compared

// let arr = [1,2,3,4,5,true,"hii",4.5,]

// for(let a in arr){ // gives index
//     console.log(arr[a])
// }

// let arr = [1,2,3,4,5,true,"hii",4.5,]

// for(let a of arr){ // gives value directly
//     console.log(a)
// }


// let arr = [1,2,3,4,5,true,"hii",4.5,]
// for(let a of arr){ 
//     if(typeof(a)=='number'){
//         console.log(a)
//     }
// }

//object
let student={
    RollNo:325,
    Name:"Siyaram",
}

console.log(student);
console.log(student.Name);
console.log(student.Name);
