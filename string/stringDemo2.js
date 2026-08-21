var ogData = "ahmeDabad"
var upperdata =""

for(let i=0;i<ogData.length;i++){

    //console.log(ogData.charCodeAt(i)-32)
    upperdata+=String.fromCharCode(ogData.charCodeAt(i)-32)

}
console.log(upperdata)