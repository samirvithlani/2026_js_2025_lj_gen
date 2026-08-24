// document.querySelector("#btn").addEventListener("click",()=>{
//     console.log("button clicked...")
// })

const button = document.querySelector("#btn")
button.addEventListener("click",()=>{
    button.innerHTML="clicked"
    const dice = document.getElementById("dice")
    dice.innerHTML=`<pre>  
    
      * <br></pre>`
})
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor ="green"
})


