// document.querySelector("#btn").addEventListener("click",()=>{
//     console.log("button clicked...")
// })

const button = document.querySelector("#btn")
button.addEventListener("click",()=>{
    button.innerHTML="clicked"
})
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor ="green"
})