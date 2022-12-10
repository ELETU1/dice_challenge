//randomly generating images for both players
var rand1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.querySelector(".img1");
img1.setAttribute("src", "./images/dice"+rand1+".png");

var rand2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.querySelector(".img2");
img2.setAttribute("src", "./images/dice"+rand2+".png");

var x = document.querySelector("h1");
x.style.fontSize = "2rem";
//decide the winners
if(rand1 === rand2){
  x.innerHTML = "Draw!";
}
else if(rand1 > rand2){
  x.innerHTML = "Player_1 Wins!!";
}
else{
  x.innerHTML = "Player_2 Wins!!";
}
