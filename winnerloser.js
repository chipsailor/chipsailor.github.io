window.onload = chooseWinner;

var diceroll = new Array("winner.png","loser.png");

function chooseWinner() {
     var randomNum = Math.floor(Math.random() * diceroll.length);
     document.getElementById("winnerloser").src = diceroll[randomNum];