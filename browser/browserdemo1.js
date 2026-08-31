window.addEventListener("DOMContentLoaded",()=>{
    alert("loaded..")
    const button = document.querySelector("#btn")
    console.log(button)
})

//resize:

window.addEventListener("resize",()=>{
    // console.log("height",window.innerWidth)
    // console.log("w",window.innerHeight)

    if(window.innerWidth <= screen.width*0.5){
        alert("50% screen")
    }
    
})