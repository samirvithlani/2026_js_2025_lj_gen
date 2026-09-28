const payment =()=>{

    console.log("payment has been processing..")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"payment success",amount:1000})
        }, 3000);
    })
    
    return promise
}

const genReceipt = (amount)=>{

    console.log("generating receipt...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({message:"ok",amount:amount})
        }, 4000);
    })
    return promise
}


const phonepe = ()=>{

    console.log("welocme to phonepe")
    const pay = payment() //pay == promise

    pay.then((paymentdata)=>{
        console.log("payment dtaa",paymentdata)
        const rec = genReceipt(paymentdata.amount)

        rec.then((recdata)=>{
            console.log("reccdata",recdata)
        })
    })
    


}


phonepe()