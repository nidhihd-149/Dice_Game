var r_v1 = Math.floor(Math.random()*6)+1;
var r_v2 = Math.floor(Math.random()*6)+1;

var img1 = "dice"+r_v1+".png";
var img2 = "dice"+r_v2+".png";


document.querySelector(".img1").setAttribute("src","./images/"+img1);
document.querySelector(".img2").setAttribute("src","./images/"+img2);


if (r_v1 > r_v2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (r_v1 < r_v2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}