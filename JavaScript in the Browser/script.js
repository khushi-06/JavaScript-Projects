// // CONSOLE METHODS IN JAVASCRIPT----------------------------


// // //console.log(console)
// // // THIS STATEMENT WILL SHOW ALL THE METHODS THAT CAN BE APPLIED ON THE CONSOLE 
// // console.error("this is a error")
// // // shows error

// // console.assert("show assertion")
// // // shows assertion or facts

// // obj={
// //     a:4,b:3,c:5
// // }
// // console.table(obj)
// // // show the content in the tabular format

// // console.warn("please dont do this")
// // // show the warning

// // console.info("this is an information")
// // // shows the information in diffrent information section

// // console.time("a")
// // console.timeEnd("a")
// // // this pair of instructioin will tell us the time taken in between the two statements




// // //USER INTERACTION : ALERLT | PROMPT | CONFIRM------------------------------------------------------------------

// // alert("this is a alert ")
// // // this opens a mini window and show a alter with the message and tthe details of the sender


// // let a=prompt("enter the favorite number")
// // console.log(a)
// // document.write(a)
// // // helps to take input for the user


// // let write = confirm("do u want it?")
// // // asks for confirmation


// // DOM MANUPILATION-------------------------------
// document.title
// document.head
// document.body
// // used to acced the element in the document and do the manipulation




// // ACESSESING THE CHILD-----------------------------
// // using the Dom tree one can get the child and the parent relationship
// console.log(document.body.firstchild)
// console.log(document.body.lastchild)
// // child n ode might look like a array but it is not a array
// console.log(document.body.childNode)



// // PARENT AND SIBLING OF AN ELEMENT------------------



// manipulation done using the DOM : it is used in order to perform realtime manipuation (while the interaction of a user)
// console.log(document.body)

// DOM MANIPULTATION---------------------------------

// // select element by ID
// let a=document.getElementById("click");
// console.log(a)

let b=document.getElementsByClassName("con");
console.log(b)
// using this u can manipulate the selected element


// b[0].style.background="yellow"

// // it is used to add external class made in the css: inorder to give proper styling
// b[0].classList.add("bg-primary")
// // removes the external class
// b[0].classList.remove("bg-primary")

// console.log(b.innerHTML)
// console.log(b.innertext)


// to select element form tag name
console.log(document.getElementsByTagName("div"))


