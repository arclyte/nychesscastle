var quotes = [
	{"quote":"The only good Rook is a working Rook!", "author":"Samuel Reshevsky"},
	{"quote":"All I want to do, ever, is just play Chess.", "author":'Bobby Fischer'},
	{"quote":"Strategy requires thought, tactics require observation.", "author":'Max Euwe' },
	{"quote":"I don’t believe in psychology. I believe in good moves.", "author":'Bobby Fischer' },
	{"quote":"Modern Chess is too much concerned with things like Pawn structure. Forget it, Checkmate ends the game.", "author":'Nigel Short' },
	{"quote":"Life is a kind of Chess, with struggle, competition, good and ill events.", "author":'Benjamin Franklin' },
	{"quote":"The winner of the game is the player who makes the next-to-last mistake.", "author":'Savielly Tartakover' },
	{"quote":"Play the opening like a book, the middle game like a magician, and the endgame like a machine.", "author":'Spielmann' },
	{"quote":"When in doubt... play Chess!", "author":'Tevis' },
	{"quote":"Good positions don’t win games, good moves do.", "author":'Gerald Abrahams' },
	{"quote":"During a Chess competition a Chessmaster should be a combination of a beast of prey and a monk.", "author":'Alexander Alekhine' },
	{"quote":"Every Chess master was once a beginner.", "author":'Chernev' },
	{"quote":"It’s always better to sacrifice your opponent’s men.", "author":'Savielly Tartakover' },
	{"quote":"Chess is life.", "author":'Bobby Fischer' },
	{"quote":"A bad plan is better than none at all.", "author":'Frank Marshall' },
	{"quote":"Not all artists are Chess players, but all Chess players are artists.", "author":'Marcel Duchamp' },
	{"quote":"The pupil wants not so much to learn, as to learn how to learn.", "author":'Samuel Boden' },
	{"quote":"That's what chess is all about. One day you give your opponent a lesson, the next day he gives you one.", "author":' Bobby Fischer' },
	{"quote":"Chess can help a child develop logical thinking, decision making, reasoning, and pattern recognition skills, which in turn can help math and verbal skills.", "author":'Susan Polgar' },
	{"quote":"Contrary to many young colleagues I do believe that it makes sense to study the classics.", "author":'Magnus Carlsen' },
	{"quote":"It is ... impossible to keep one\'s excellence in a little glass casket, like a jewel, to take it out whenever wanted. On the contrary, it can only be conserved by continuous and good practice.", "author":'Adolph Anderssen' },
	{"quote":"The machine does not teach playing flexibility, does not help in taking account of human facxtors in the battle, and on whole, strictly speaking, it restricts the possibilities for young players.", "author":'Sergey Shipov' },
	{"quote":"Chess helps you to concentrate, improve your logic. It teaches you to play by the rules and take responsibility for your actions, how to problem solve in an uncertain environment.", "author":'Garry Kasparov' }
];

$(document).ready(function(){
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	$('.quote').html(quote.quote);
	$('.author').html('- ' + quote.author);
});
