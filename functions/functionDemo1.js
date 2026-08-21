function demo(){
    console.log("demo called..")
}
demo()

function add(a,b){

    console.log("add called...")
    console.log("value of a = ",a)
    console.log("value of b = ",b)
}


add()
add(1)
add(12,22) // *
add(12,22,33)

function avg(a,b,c){

    return (a + b + c) /3
}

var ans = avg(10,20,30)
console.log("ans = ",ans)

//if any function is returing something you can call inside log funciton
console.log(avg(100,200,300))
console.log(avg()) //NaN not a number




function getFullName(fname,lnam){

    return fname + ' ' +lnam
}

//console.log(getFullName("ram","prasad"))
console.log(getFullName())
console.log(getFullName(10,20))