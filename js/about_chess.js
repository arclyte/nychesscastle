var 
	board,
	board_config = {
		draggable: true,
		dropOffBoard: 'trash',
		sparePieces: true
	},
	game,
	random
;

$(document).ready(function(){
	board = new ChessBoard('board', board_config);

	$('.btn').on('click', function(e) {
		e.preventDefault();
		
		var type = $(this).attr('id');
		clearTimeout(random);

		switch(type) {
			case 'start':
			case 'clear':
				board[type]();

				$('#fen-name').hide();

				break;
			case 'random':
				board.start();

				game = new Chess();
				makeRandomMove();

				$('#fen-name').hide();

				break;
			case 'opening':
			case 'puzzle':
				var fen = findFen(type);
				board.position(fen.fen, true);
				
				$('#fen-name').html(fen.name);
				$('#fen-name').show();
			
				break;
		}
	});
});

var findFen = function(type) {
	data = fens[type];

	return data[Math.floor(Math.random() * data.length)];
}

// from http://chessboardjs.com/examples#5002
var makeRandomMove = function() {
	var possibleMoves = game.moves();

	// exit if the game is over
	if (game.game_over() === true ||
	game.in_draw() === true ||
	possibleMoves.length === 0) return;

	var randomIndex = Math.floor(Math.random() * possibleMoves.length);
	game.move(possibleMoves[randomIndex]);
	board.position(game.fen());

	random = window.setTimeout(makeRandomMove, 500);
};
