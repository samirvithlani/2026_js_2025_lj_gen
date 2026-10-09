var user ={
    id:1,
    name:"raj",
    age:23
}
console.log(user)
console.log(user.name.toUpperCase())
//console.log(user.email.toLowerCase())
console.log(user.email && user.email.toLowerCase())
console.log(user.email?.toLowerCase())

var employees = [
    {
        id:1,
        name:"raj",
        age:23
    },
    {
        id:101
    },
    {
        id:102,
        name:"parth"
    }
]

console.log(employees)

//var names = employees.map((emp)=>emp.name.toUpperCase())
//var names = employees.map((emp)=>emp.name && emp.name.toUpperCase())
var names = employees.map((emp)=>emp.name?.toUpperCase())
console.log(names)