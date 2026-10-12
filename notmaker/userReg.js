//var users = [] //[{},{}] ,, aftere refres []
var users = JSON.parse(localStorage.getItem("userobj"))

if(users==null){
    users=[]
}
console.log(users)

const submitHanlder =(event)=>{
    event.preventDefault()
    console.log("form subbmited...")

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    //store in localstorage -->3 valus ---> {} -->single object
    const userObj = {
        id:Math.floor(Math.random()*1000),
        name:name,
        email:email,
        password:password
    }
    users.push(userObj)

    localStorage.setItem("userobj",JSON.stringify(users))
}