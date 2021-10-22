let scoreBoard = {};
export function createScoreBoard() {
	scoreBoard["The Best Ever"];
	return scoreBoard;
}

export function addPlayer(scoreBoard, player, score) {
	scoreBoard[player] = score;
	return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
	delete scoreBoard[player];
	return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
	scoreBoard[player] += points;
	return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  throw new Error('Please implement the applyMondayBonus function');
}

export function normalizeScore(params) {
  throw new Error('Please implement the normalizeScore function');
}
