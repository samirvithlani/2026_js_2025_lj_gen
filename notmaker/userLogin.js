const submitHanlder =(event)=>{
    event.preventDefault();
      

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    //check db.. -->localstorage..
    const users = JSON.parse(localStorage.getItem("userobj")) //[]
    console.log(users)
    if(users!=null){

        const foundUser = users.find((u)=>u.email == email && u.password == password)
        if(foundUser){
            alert("login success")
        }
        else{
            alert("invalid cred..")
        }

    }
    else{
        alert("app down..")
    }

}