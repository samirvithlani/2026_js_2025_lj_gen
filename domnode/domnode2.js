const root= document.getElementById("root")
const mybutton = document.createElement("button")
var users = [11,22,33,45,67]



for(let i=0;i<users.length;i++){

    var usertag = document.createElement("h1") //<h1></h1>
    usertag.innerText=users[i]
    root.appendChild(usertag)
    
}
