var data = [1,2,3,4,5,6,6,7,88,9,9,9,10]
//var evenarray=[]

// for(i=0;i<data.length;i++){
//     if(data[i]%2==0){
//         evenarray.push(data[i])
//     }
// }

var evenarray = data.filter((d)=>{
    return d %2==0 //if this cond -->push or not
})

console.log(evenarray)


var users = ["amit","sumit","raj","parth","jay","ajay","kunal"]

var filtuser = users.filter((u)=>{
    return u.length>4
})
console.log(filtuser)

//map -->filt 

//map will return all element
//filt will return all satisified cond elements

var filtuser2 = users.filter((u)=>{
    return u.includes("i")
})
console.log(filtuser2)


//it