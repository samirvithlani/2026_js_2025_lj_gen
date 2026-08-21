
const hdfc = (amount)=>{
    console.log("trasncation done from HDFC BANK amount = ",amount)
    return amount*1.2
}

const sbi = (amount)=>{
    console.log("trasncation done from SBI BANK amount = ",amount)
    return amount * 1.1
}


// const upi = (cb,amount)=>{
//     console.log("upi called...")
//     //cb(1200)
//     var trans = cb(amount)
//     //console.log("total amount of trans = ",trans)
//     return trans
// }
const upi = (cb,amount)=>{
    console.log("upi called...")
    //cb(1200)
    
    return cb(amount)
}

var amount = 1500
var trans = upi(hdfc,amount)
console.log("trasncation = ",trans)
