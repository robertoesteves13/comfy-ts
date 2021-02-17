import { Board } from "./Board";

export class Chess {

	private startingPositions: string[];
	private Board: Board;

	constructor() {

		this.startingPositions = [
			'BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR',
			'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'', '', '', '', '', '', '', '',
			'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP',
			'WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'
		]

		this.Board = new Board(this.startingPositions);

	}

}