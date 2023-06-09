let arr=[12,65,93,4,2,7]


// MAP METHOD

// let a=arr.map((element)=>
// {
//     console.log(a)
// })

// // diffrence map and for each method is that map method will form a new arr
// // and the values are added in "a" in the above example

// // FILTER METHOD
// let arr2=arr.filter((a)=>{
//     return a<10
// }
// )
// console.log(arr2)

// // here we can add various filter condition inside the filter fuction and the output is been created in a new 
// // array without disturbing the input array


// REDUCE METHOD
let arr3=arr.reduce((h1,h2)=>{
    return h1+h2
}
)
console.log(arr3)

// // here the value return by the fuction is again used as the parameter and the fuction is run again



