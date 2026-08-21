
const ce=()=>{
    console.log("ce called...")
}
const ec = ()=>{
    console.log("ec called...")
}


const admission = (cb)=>{
    console.log("admission called !!!")
    //cb --> ce()
    cb()
}


var pers = 89;
if(pers>85){
    admission(ce)
}
else if(pers>75){
    admission(ec)
}
else{
    console.log("try next year !!")
}
