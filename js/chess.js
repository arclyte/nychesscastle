var 
	board,
	board_config = {
		draggable: true,
		dropOffBoard: 'trash',
		sparePieces: true
	}
;

$(document).ready(function(){
	board = new ChessBoard('board', board_config);

	$('.btn').on('click', function(e) {
		e.preventDefault();
		
		var type = $(this).attr('id');

		switch(type) {
			case 'start':
			case 'clear':
				board[type]();

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
	})

	// $('#startBtn').on('click', function(e) {
		// e.preventDefault();
		// board.start();
		// $('#opening').hide();
	// });

	// $('#clearBtn').on('click', function(e) {
		// e.preventDefault();
		// board.clear();
		// $('#opening').hide();
	// });

	// $('#openBtn').on('click', function(e) {
		// e.preventDefault();

		// var fen = findFen('opening');

		// board.position(fen.fen, true);

		// $('#opening').html(fen.name);
		// $('#opening').show();
	// });

	// $('#puzzleBtn').on('click', function(e) {
	// 	e.preventDefault();

	// 	var fen = findFen('puzzle');

	// 	board.position(fen.fen, true);

	// 	$('#opening').html(fen.name);
	// 	$('#opening').show();
	// });
});

function findFen(type) {
	var fens = {
		opening: [
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
			{name: "Zuketort Opening, Symmetrical Variation", fen: "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2"}
			// {name: "", fen: ""},
		],

		puzzle: [
			{name: "Black Mates in 2.", fen: "5rk1/ppp2pbp/3p2p1/1q6/4r1P1/1NP1B3/PP2nPP1/R2QR2K b - - 0 1"},
			{name: "Black Mates in 3.", fen: "2r3k1/6pp/p2p4/1p6/1p2P3/1PNK1bQ1/1BP3qP/R7 b - - 0 1"},
			{name: "Black Mates in 3.", fen: "6k1/5ppp/p4r2/1p1Q4/3P1b2/2P1P1Pb/PP1Bq2P/R5K1 b - - 0 1"},
			{name: "Black Mates in 3.", fen: "8/p1p5/2p3k1/2b1rpB1/7K/2P3PP/P1P2r2/3R3R b - - 0 1"},
			{name: "Black to move and win.", fen: "2rr2k1/pb3pp1/4q2p/2pn4/2Q1P3/P4P2/1P3BPP/2KR2NR b - - 0 1"},
			{name: "Black to move and win.", fen: "8/3R1p2/1p3k2/7b/2Pp3P/BP1K4/2P4r/8 b - - 0 1"},
			{name: "Black to move and win.", fen: "r4rk1/pp4pp/5pn1/3q1R2/2nP2N1/2P1B3/P1Q3PP/R5K1 b - - 0 1"},
			{name: "Black to move and win.", fen: "6k1/2R2p1p/5rp1/8/6P1/P2bRB2/1r5P/7K b - - 0 1"},
			{name: "Black to move and win.", fen: "6k1/ppq3bp/2n2np1/5p2/2P2P2/4KBN1/PP5P/RQ6 b - - 0 1"},
			{name: "Black to move and win.", fen: "5k2/3b2p1/1p4qp/p1pPp1p1/P1P1Pn2/2P5/2Q3PP/3BB1K1 b - - 0 1"},
			{name: "Black to move and win.", fen: "6k1/1p3pb1/4p1p1/2p2p2/2PP1P1q/1P5P/rB1Q2P1/R5K1 b - - 0 1"},
			{name: "Black to move and win.", fen: "2k5/p1p3p1/1bp5/6N1/1P6/2P1r2P/P1KN1rn1/R6R b - - 0 1"},
			{name: "Black to move and win.", fen: "2krr3/ppp2p2/2b4p/6pN/2Pq4/3P4/P1P2QPP/R4RK1 b - - 0 1"},
			{name: "White Mates in 2.", fen: "r5q1/pp1b1kr1/2p2p2/2Q5/2PpB3/1P4NP/P4P2/4RK2 w - - 0 1"},
			{name: "White Mates in 3.", fen: "r7/3bb1kp/q4p1N/1pnPp1np/2p4Q/2P5/1PB3P1/2B2RK1 w - - 0 1"},
			{name: "White Mates in 3.", fen: "8/2r1q2p/7k/2pR1Q2/4p2p/1P2P3/5PP1/6K1 w - - 0 1"},
			{name: "White to move and win.", fen: "2rq1k1r/p3nppp/1p2pN2/nP1pP3/3P2P1/2R1QN2/5PKP/2R5 w - - 0 1"},
			{name: "White to move and win.", fen: "r5k1/ppr2p2/6p1/3pP3/3P3Q/q2B1R1P/P5PK/8 w - - 0 1"},
			{name: "White to move and win.", fen: "r1bqkb1r/pp1n1ppp/3pp3/4P3/3N4/2PB4/P1PBQPPP/R3K2R w - - 0 1"},
			{name: "White to move and win.", fen: "2b3rk/4np1p/p6P/2r1qpQR/1pP1p3/4N3/PPB2PP1/1K1R4 w - - 0 1"},
			{name: "White to move and win.", fen: "r3kn2/5q2/r3p2p/4Pp2/1Q3N1B/5P1P/1P6/6RK w - - 0 1"},
			{name: "White to move and win.", fen: "3r1r1k/1b2N1p1/p2P1p1p/1p2n1q1/2p1PR2/8/PPB2QPP/3R3K w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "3qr2k/pbpp2pp/1p5N/3Q2b1/2P1P3/P7/1PP2PPP/R4RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1bq2k1/ppp2r1p/2np1pNQ/2bNpp2/2B1P3/3P4/PPP2PPP/R3K2R w KQ - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1bk3r/1pp2ppp/pb1p1n2/n2P4/B3P1q1/2Q2N2/PB3PPP/RN3RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r2q1k1r/ppp1n1Np/1bnpB2B/8/1P1pb1P1/2P4P/P4P2/R2Q1RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1b2rk1/ppp2p1p/1b1p1B2/5q1Q/2Bp4/2P5/PP3PPP/R3R1K1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "1rqk3r/p1p1pppp/2Q1b3/3pN3/3P4/B7/P4PPP/b3R1K1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r2k1b1Q/pppn3p/3p4/1B5n/5pb1/5N2/PPPP1qPP/RNBKR3 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r4r2/pQ3ppp/2np4/2bk4/5P2/6P1/PPP5/R1B1KB1q w Q - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r2q1k1r/ppp1bB1p/2np4/6N1/3PP1bP/8/PPP5/RNB2RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "rn5r/pp1b2b1/1q1p3p/3nk1p1/3p4/3Q2P1/PPP1NR2/4R1K1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1b3nr/ppqk1Bbp/2pp4/4P1B1/3n4/3P4/PPP2QPP/R4RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r4b1r/ppp1qb2/2np3p/5R2/3PP2k/4B1NP/PPP3K1/8 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1b2Qnr/p1pk3p/1pnp4/6q1/2BPP3/8/PPP3PP/RN3RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "rnbk3r/ppppb2p/3N1n2/7Q/4P3/2N5/PPPP3P/R1B1KB1q w Q - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1b1kbnr/pp2qp2/1np4p/4P3/2B2BpN/2NQ1pP1/PPP4P/2KR3R w kq - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "rnb2k1r/ppp1qBpp/8/4N2Q/8/2n3b1/PPPP2K1/R1B2R2 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1bk2nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "r1bk3b/1pppq3/2n3n1/1p2P1BQ/3P4/8/PPP3P1/5RK1 w - - 0 1"},
			{name: "White to Move, Checkmate in 2.", fen: "rnbqr2k/ppppn1p1/1b5p/6NQ/2BPPB2/8/PPP3PP/RN3K1R w - - 0 1"}
		]
	};
	
	data = fens[type];
	return data[Math.floor(Math.random() * data.length)];
}