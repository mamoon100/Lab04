const left = document.getElementById("l");
const mid = document.getElementById("m");
const right = document.getElementById("r")

function choose () {
    var person  = prompt("Enter your favorite person in AOT (Choose between Levi, Eren and Mikasa)");
    var color = prompt ("Enter your favorite color");
    var re = confirm ("Chooooooooooose my Friend");
    if (person === "Levi"){
    left.innerHTML = "<img src=\"https://i.pinimg.com/736x/2f/ec/b0/2fecb047bf2a1208ed6716a2be1e8cb1.jpg\" width=\"250px\" height=\"auto\">";}
    else if (person === "Eren") {
    left.innerHTML = "<img src=\"https://wallpaperaccess.com/full/214222.jpg\" width=\"250px\" height=\"auto\">";}
    else if (person === "Mikasa") {
    left.innerHTML = "<img src=\"https://static.zerochan.net/Mikasa.Ackerman.full.1526378.jpg\" width=\"250px\" height=\"auto\">";};
    mid.style.backgroundColor = color;
    if (re){
        right.innerHTML = "<h1> You Pressed OK! :) </h1>"
    }
    else {
        right.innerHTML = "<h1> You Pressed Cancel! :( </h1>"
    }
}


choose ()
