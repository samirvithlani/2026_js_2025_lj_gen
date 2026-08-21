var marks = [21,24,23,19,24,25]

//pass >=24 
var flag=false
var count=0
for(let i=0;i<marks.length;i++){
    count++
    if(marks[i]>=24){
        flag=true
        break
    }
}

console.log(flag)
console.log(count)


var flag1 = marks.some((m)=>{
    return m>=24
})
console.log(flag1)


var marks = [21,24,23,19,24,25]
var flag2=true
//every subject must have >=20
for(let i=0;i<marks.length;i++){

    if(marks[i]<20){
        flag2 =false
        break
    }
}
console.log(flag2)

var flag3 = marks.every((m)=>{
    return m>20
})
console.log(flag3)














