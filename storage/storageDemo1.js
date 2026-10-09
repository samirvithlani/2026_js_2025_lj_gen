const storeData = ()=>{
    localStorage.setItem("data","abcd")

    var loggedInuser = {name:"amit",time:"whatever"}
    //localStorage.setItem("user",loggedInuser)
    localStorage.setItem("user",JSON.stringify(loggedInuser))

    sessionStorage.setItem("time","001")
}

const getData = ()=>{

    var d1 = localStorage.getItem("data")
    console.log(d1)
    var u1 = localStorage.getItem("user")
    console.log(u1)
    //to convert string object to object data type
    var userobj = JSON.parse(u1)
    console.log(userobj)
    //console.log(u1.name)
}

const clearStorages = ()=>{
    localStorage.removeItem("user")
    //localStorage.clear()
    //sessionStorage.clear()
}