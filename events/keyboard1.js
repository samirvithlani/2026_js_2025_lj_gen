const getData =() =>{
    const textout= document.getElementById("textoutput")
    const data = document.getElementById("data") //<input>
    console.log(data.value)
    textout.innerText = data.value
}
const getEmail =()=>{
    const email = document.getElementById("email")
    console.log(email.value)
}


//5 emails array
