window.onload = winnerloser;

var dinner = new Array("/winner.png","/loser.png");

function winnerloser() {
     var randomNum = Math.floor(Math.random() * dinner.length);
     document.getElementById("myPicture").src = dinner[randomNum];
}