// let a=[1,2,3,4]
// console.log(a)
// console.log(a[2])
// console.log(a.length)
// // we can add values (mutable)
// a[4]=8
// //we can update the values in the array 
// a[2]=0
// console.log(a)


// AARAY METHODS------------------------------------

// let num=[1,2,3,4,5,34]
// // conversion to string
// let b = num.toString()
// console.log(num)


// // remove the last element form the array
// r=num.pop()
// console.log(num)
// // the pop function returns the poped element
// console.log(r)

// b=num.shift()
// //  the element here is been removed form the first place
// console.log(num)

// let c=num.unshift()
// //  the element here is been removed form the first place
// console.log(c)








// // OPERATORS IN ARRAY

// a=[11,2,4,6,7,3]
// delete a[2]
// console.log(a)
// // the element value is been delete and not the element hence the lenght of the araay will still remain the same

// let b=[3,5,3,2,4]
// let r=[3,23234235,233,223,34,57]
// let new_a=a.concat(b,r)
// console.log(new_a)
// // here both the string have been joined together

// // sort method
// a.sort()
// // here the original array is been sorted hence the orginal array is been sorted
// console.log(a)


// // we can give a function on the basisi of which the sorting can be done
// let compare=(a,b)=>{
//     return b-a
// }
// a.sort(compare)

// // reverse
// a.reverse()
// console.log(a)

a=[11,2,4,6,7,3,4,353,34]
// spice and slice

// splice: it returns the deleted items form the array and modififes the source array
// a.splice(2)
// console.log(a)
// returned element till two
// a.splice(2,3)
// console.log(a)
// from the second index delete the next 3 items
// a.splice(1,4,23,256.67,65)
// console.log(a)
// here the value for the index1 to the next 4 element is deleted and then replaced by then given 4 values
// console.log(a)



// // slice
// let new_a=a.slice(3)
// console.log(new_a)
// // it will  cut the array for the 3rd elemnt and print the next rest of them



// // loops in aaray-----------------------------------


// for (i=0; i<a.length;i++){
//     console.log(a[i])
// }
// // itterated over  the array and prints all the elements of the array in loop

a.forEach((Element)=>{
    console.log(Element)
}
)
// another way of wrting a loop For each item





