var board_config = {
	  draggable: true,
	  dropOffBoard: 'trash',
	  sparePieces: true
	};

$(document).ready(function(){
	var board1 = new ChessBoard('board1', board_config);

	$('#startBtn').on('click', function(e) {
		e.preventDefault();
		board1.start();
		$('#opening').hide();
	});

	$('#clearBtn').on('click', function(e) {
		e.preventDefault();
		board1.clear();
		$('#opening').hide();
	});

	$('#randomBtn').on('click', function(e) {
		e.preventDefault();

		var fen = findFen();

		board_config.position = fen.fen;
		board1 = new ChessBoard('board1', board_config);

		$('#opening').html(fen.name);
		$('#opening').show();
	});
});

function findFen() {
	var fens = [
		{name: "Anderssen Opening", fen: "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1"},
		{name: "Bird Opening", fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq f3 0 1"},
		{name: "Bishop's Opening", fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2"},
		{name: "Catalan Opening", fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3"},
		{name: "Dutch Defense", fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq f6 0 2"},
		{name: "English Defense", fen: "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3"},
		{name: "English Opening", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 1"},
		{name: "English Opening, King's English Variation", fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq e6 0 2"},
		{name: "French Defense", fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2"},
		{name: "Gruenfeld Defense", fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4"},
		{name: "Hungarian Opening", fen: "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1"},
		{name: "Indian Game", fen: "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2"},
		{name: "Kangaroo Defense", fen: "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3"},
		{name: "King Pawn Game", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2"},
		{name: "King's Gambit, Accepted, Fischer Defense", fen: "rnbqkbnr/ppp2ppp/3p4/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4"},
		{name: "King's Gambit, Accepted, Modern Defense", fen: "rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq d6 0 4"},
		{name: "King's Gambit, Declined, Classical Variation", fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3"},
		{name: "Latvian Gambit, Accepted", fen: "rnbqkbnr/pppp2pp/8/4pP2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 3"},
		{name: "Latvian Gambit", fen: "rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq f6 0 3"},
		{name: "Modern Defense", fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4"},
		{name: "Nimzo-Indian Defense", fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4"},
		{name: "Old Indian Defense, Normal Variation", fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq e3 0 5"},
		{name: "Owen Defense", fen: "rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2"},
		{name: "Polish Defense", fen: "rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR w KQkq b6 0 2"},
		{name: "Polish Opening", fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq b3 0 1"},
		{name: "Queen's Gambit Accepted, Deferred", fen: "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4"},
		{name: "Queen's Gambit Accepted", fen: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3"},
		{name: "Queen's Indian Defense, Classical Variation", fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq - 4 6"},
		{name: "Russian Game", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3"},
		{name: "Russian Game, Classical Attack", fen: "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 5"},
		{name: "Scotch Game, Modern Defense", fen: "r1b1k1nr/pppp1ppp/2n5/8/1b1NP2q/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6"},
		{name: "Scotch Game, Scotch Gambit", fen: "r1bqkbnr/pppp1ppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4"},
		{name: "Sicilian Defense, Classical Variation", fen: "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq - 4 6"},
		{name: "Sicilian Defense, Closed Variation", fen: "r1bqk1nr/pp2ppbp/2np2p1/2p5/4PP2/2NP2P1/PPP3BP/R1BQK1NR b KQkq f3 0 6"},
		{name: "Sicilian Defense", fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2"},
		{name: "Slav Defense", fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3"},
		{name: "Spanish Game, Open Variation", fen: "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6"},
		{name: "Spanish Game, Open Variations, Main Lines", fen: "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9"},
		{name: "Torre Attack, Classical Defense", fen: "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3"},
		{name: "Trompowsky Attack", fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2"},
		{name: "Vienna Game", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2"},
		{name: "Vienna Game, Vienna Gambit", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq f3 0 3"},
		{name: "Wade Defense", fen: "rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3"},
		{name: "Zuketort Opening, Symmetrical Variation", fen: "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2"},
		// {name: "", fen: ""},
	];
	
	return fens[Math.floor(Math.random() * fens.length)];
}