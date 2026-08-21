// const outer = ()=>{
//     console.log("outer called !!!!")

//     const inner = ()=>{
//         console.log("inner called...")
//     }
//     inner()
// }

// outer()



const outer =()=>{

    const inner =()=>{
        console.log("inner...")
    }

    return inner
}


var x = outer()
console.log(x)
x()