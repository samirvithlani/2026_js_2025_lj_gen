const submitHandler = (event)=>{
    //to prevent reloading...
    event.preventDefault() 
    console.log("form subbmited !!!!")

    const name = document.getElementById("name") //<input>
    //console.log(name)
    console.log(name.value)

    const email = document.getElementById("email")
    console.log(email.value)

    const age = document.getElementById("age")
    console.log(age.value)

    const country = document.getElementById("country")
    console.log(country.value)

    //get radio button data using name
    const gender = document.getElementsByName("gender") //it will return an array
    console.log(gender) //open console and check log find checked propery

    for(let i=0;i<gender.length;i++){
        if(gender[i].checked==true){
            console.log("gender --->",gender[i].value)
        }
    }


}

// const test = (event)=>{
//     console.log(event)
// }