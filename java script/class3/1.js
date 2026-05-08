// let a = [1,2,3,4,5,6,7,8,9];
// console.log(a)
// a.push(10);//adds data in last
// console.log(a)
// a.pop()
// console.log(a)
// a.unshift(0)//adds data from starting
// console.log(a)
// a.shift();//remove data from starting
// console.log(a)

// console.log(a.includes(10));//checks if data is present

// console.log(a.indexOf(5));


// let ar = [1,2,3,4,5,6,7,8,9];
// let data = ar.find(function(a){
//     return a==5;
// })
// console.log(data);

// let ar = [1,2,3,4,5,6,7,8,9];
// let d = ar.forEach((a,b,c)=>{//(values,indexes,array)
//     console.log()
// });

// let ar = [1,2,3,4,5,6,7,8,9];
// let mapD = ar.map((a,b,c)=>{//returns new array
//     return a*2
// })
// console.log(mapD)


//------------------------------filter-----------------------
//creates an new array of elements that give true for our filter
// let a=[1,2,3,4,5,6,7,8,9];
// let evenArray = a.filter(even=(n)=>{
//      return n%2==0;
// });
// console.log(a);
// console.log(evenArray);

// let arr = [55,44,34,65,26,75,45,37,87,63,45];
// let sorted = arr.filter(sort=(n)=>{
//         if(n>60){
//                 return n
//         }
// });
// console.log("Marks > then 60 are ==>",sorted)

//---------------------------------reduce---------------------------------
//perform some operation & reduce the array to a single value and returns that value

// a=[1,2,3,4,5,6,7,8,9];
// const output = a.reduce((res,cur)=>{
//         return res+cur;
// });
// console.log(output);

//for largest number
// a=[1,2,3,4,5,6,7,8,9];
// const output = a.reduce((res,cur)=>{
//         return res>cur?res:cur;
// });
// console.log(output);


// a=[1,2,3,4];
// const factorial = a.reduce((res,cur)=>{
//         return res*cur;
// });
// console.log(factorial);

//---------------------------Q-----------------------
// let n = prompt("Enter n:");
// let arr =[];
// for(let i =1; i<=n; i++){
//         arr[i-1]=i;
// }

// const sum = arr.reduce((res,cur)=>{
// return res+cur;
// });
// console.log(sum);

// const prod = arr.reduce((res,cur)=>{
// return res*cur;
// });
// console.log(prod);