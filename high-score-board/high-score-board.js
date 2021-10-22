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
	for(let player in scoreBoard){
		scoreBoard[player] += 100;
	}
	return scoreBoard;
}

function normalize(score) {
  return 2 * score + 10;
}

export function normalizeScore(params) {
	return params["normalizeFunction"](params["score"]);	
}
