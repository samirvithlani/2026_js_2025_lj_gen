// //bloack
// //global scope

// {
//     //block
// }

//var keyword is having global scope
//let and const is having bloack scope

var x = 100;
console.log("value of x = ",x)
let p = 200
console.log("value of p =",p)

{
    //block
    var a = 1000;
    console.log("value of a = ",a)
    let b =2000
    console.log("value of b = ",b)
}

console.log("value of a outside block ",a)
//console.log("value of b outside block = ",b) //error


{
    //cabin 1
    let c = 199
}

{
    console.log("value of c = ",c)
}