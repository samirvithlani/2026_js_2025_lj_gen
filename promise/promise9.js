
const getData =(amount)=>{


        return new Promise((resolve,reject)=>{
          setTimeout(() => {

            if(amount>1000){
                resolve({message:"data...."})
            }
            else{
                reject({message:"error"})
            }

          }, 3000);  
        })

}


const printData = async()=>{

    try{
        const data = await getData(1200)
        console.log("data..",data)
    }catch(err){
        console.log("err..",err)
    }
}
printData()