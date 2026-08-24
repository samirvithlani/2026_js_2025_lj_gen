const changeData = ()=>{
    const boxes = document.getElementsByClassName("box") //[]
    console.log(boxes)
    //boxes[0].style.backgroundColor = "black"
    //loop
    const h1tag = document.getElementsByTagName("h1") //[h1,,,,,]
    console.log(h1tag)
    for(i=0;i<h1tag.length;i++){
        h1tag[i].style.color="red"
    }
    
    // h1tag.foreach((h1)=>{
    //     h1.style.color = "red"
    // })
}