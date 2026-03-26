function sendSOS(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

let mapLink="https://maps.google.com/?q="+lat+","+lon;

document.getElementById("location").innerHTML=mapLink;

alert("Location detected");

});

}

}