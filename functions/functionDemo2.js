//arrow functions

function demo(){
    console.log("demo...")
}
demo()

const demo1 = ()=>{
    console.log("demo1")
}

const add = (a,b)=>{
    console.log(a+b)
    return a+b
}
var ans = add(1,2)
console.log("ans = ",ans)

//single line

const add1 = (a,b)=>a+b
var ans1 = add1(100,20)
console.log("ans1 ",ans1)


const getFullName = (fname,lname)=>fname  + " "+lname
console.log(getFullName("virat","kohli"))


const checkString =(name)=>name.includes(" ") ? true : false

console.log("check string",checkString("amit shah"))


const checkdt = (x)=>typeof(x)=="number" ? true:false

console.log("check....",checkdt("hello"))

const checkLen =(x,y)=>x.length + y.length >= 10 ?true:false
console.log("checl len ",checkLen("abcd","pqrstuvw"))
const checkLen2 = (a,b)=>a.length>b.length?true:false

const checkNo = (no)=>no>0?"pos":no==0?"zero":"Neg"
console.log(checkNo(10))







