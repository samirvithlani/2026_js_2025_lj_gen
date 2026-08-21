
// const add = ()=>{

//     console.log("add called..")
//     return 100
// }


// var ans = add // ans == add()
// console.log("ans",ans)
// var x = ans() //add()
// console.log("x",x)


// const calling = ()=>{

//     console.log("calling called...")
//     return "hello from trump"
// }

// var call = calling
// console.log(call()) //calling



// const folder1 = ()=>{
//     console.log("folder1 called..") //
//     return "java"
// }

// const folder2 =()=>{
//     console.log("folder2 called..")  
//     return folder1() 
// }

// var drive = folder2() //call
// console.log(drive) 


const book1 = ()=>{

    console.log("book1")
    return "java"
}

const book2 = ()=>{
    console.log("book2")
    return book1()
}

const book3 = ()=>{
    console.log("book3") //3
    return book2()
}

console.log(book3()) //1


















