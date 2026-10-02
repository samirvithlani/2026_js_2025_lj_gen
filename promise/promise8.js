const phonpe = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve({message:"payment done by phonepe"})
            reject({message:"payment failed in gpay"})
        }, 2000);
    })

    return promise
}

const gpay = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve({message:"payment done by gpay"})
            reject({message:"payment failed in gpay"})
        }, 1500);
    })

    return promise
}

const paytm = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve({message:"payment done by paytm"})
            reject({message:"payment failed in gpay"})
        }, 5000);
    })

    return promise
}


const payment =async()=>{


    // const p1= await Promise.race([phonpe(),gpay(),paytm()])
    // console.log(p1)

    const p2= await Promise.any([phonpe(),gpay(),paytm()])
    console.log(p2)
    
}
payment()