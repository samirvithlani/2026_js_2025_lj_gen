
let second = 0;
let min = 0
let hour = 0
let iobj=null;

const displayWatch =()=>{
    

    let h = hour<10 ? "0"+hour :hour
    let m = min<10 ? "0"+min : min
    let s = second<10 ? "0"+second : second

    const watch = document.getElementById("watch").innerText=`${h}:${m}:${s}`;
}



const start = ()=>{

iobj = setInterval(() => {
        second++;
        if(second==60){
            min++
            second=0
        }
        if(min==60){
            hour++
            min=0
        }
        displayWatch()
}, 1);


}
const stop = ()=>{

    clearInterval(iobj)    
    min=0
    hour=0
    second=0
    displayWatch()


}