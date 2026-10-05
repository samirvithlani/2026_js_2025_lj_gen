//user current location

window.navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords)
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    console.log(position.coords.accuracy)

    
})