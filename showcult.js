function ShowCult()
  {
    var Joke = [
    	'Ctrl+W',
    	':)',
    	'Things remind YOU about other things that remind ME about other things.',
    	':(',
    	'Infinite superpower.',
    	'OOO!',
		"Only natural, And we're all the better from it.",
		'Yum!',
		'Yuck.',
		'Get LuckY?',
		'Beautifully performative, I suppose.',
		'Now I will try the SuperDuper.',
		'Not at all!',
		'My food is burned, What are you wearing?',
		'Turn them lights off!',
		'I have three friends. These are problems.',
		'¡Larga vida al auto que tiene 20 años!',
		"You're really not very useful.",
		'It may be hallucinatory, yes.',
		'Are you happy to see me?',
		'Wait, I was wrong.',
		"It's always cold! Certainly hyper.",
		'Hi.',
		'Put it all in Zik Zak.',
		"One's attractivities on the couch and screen.",
		'Todays news: No news at this time, my friend!',
		'A greasy fruitcake.'
    ];
    var Pick = Math.floor(Math.random() * (Joke.length));
    document.write(Joke[Pick]);
  }
  
  document.addEventListener("load", ShowCult());