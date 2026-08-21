var numbers = [[1,2],[3,4,5],[6,7,8]]

var x = numbers.flatMap((n)=>{
    return n
})

console.log(x)

//map filter

var users = ["kunal","sumit","raj","jaya","sushma","priya","nirma","amita","jwala"]

var filtuser = users.filter((u)=>{
    return u.length>4
}).map((u)=>{
    return u.toUpperCase()
})
console.log(filtuser)


var filtusers = users.filter((u)=>u.length>4).map((u)=>u.toUpperCase())
console.log(filtusers)

//flatmap + map + filter

var users = [["raj","parth"],["amit","sumit"]]

var filtuser3 = users.flatMap((u)=>u).filter((u)=>u.includes("i")).map((u)=>u.toUpperCase())
console.log(filtuser3)