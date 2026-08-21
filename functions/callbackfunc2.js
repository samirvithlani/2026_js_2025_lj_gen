
const jio = ()=>{
    console.log("jio call...")
}
const airtel = ()=>{
    console.log("airtel called...")
}

const call = (x)=>{
    console.log("x---->",x)
    x() //jio
}


// call(10)
// call({})
// call("abcd")
// call(false)

call(jio)
call(airtel)
