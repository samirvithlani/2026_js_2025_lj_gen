
const hdfc = (amount)=>{
    console.log("trasncation done from HDFC BANK amount = ",amount)
}

const sbi = (amount)=>{
    console.log("trasncation done from SBI BANK amount = ",amount)
}


const upi = (cb,amount)=>{
    console.log("upi called...")
    //cb(1200)
    cb(amount)
}

var amount = 1900
upi(hdfc,amount)