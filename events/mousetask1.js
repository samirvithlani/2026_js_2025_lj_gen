const colors = ["red","green","yellow","blue","pink","grey"]

const changeColor =() =>{
    const rindex = Math.floor(Math.random()*colors.length)
    const data = document.getElementById("data") //<div>
    //data.style.backgroundColor = "blue"
    data.style.backgroundColor = colors[rindex]

}