var user = {
    id:1,name:"raj"
}
// console.log(user)
// user.city = "ahmedabad"
// console.log(user)

// var newuser = user
// newuser.city = "ahmedabad"
// console.log(newuser)

var newuser = {...user,city:"ahmedabad"}
console.log(newuser)


var emp = {id:1,name:"kunal",city:"delhi",age:24}

var newemp = {...emp,email:"kunal@gmail.com",city:"mumbai"}
console.log(newemp)



var colors = ["red","pink"]
console.log(colors)
var newcolors = [...colors,"white","black"]
// colors.push("white")
console.log(newcolors)