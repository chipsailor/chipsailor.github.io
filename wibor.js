function winnerloser()
  {
    var chickendinner = [
    	<img id="winner!" src="/winner.png"></img>,
        <img id="loooserrr." src="/looser.png"></img>
        
    ];
    var Pick = Math.floor(Math.random() * (chickendinner.length));
    document.write(chickendinner[Pick]);
  }
  
  document.addEventListener("load", winnerloser());