let playerVal = {
	health:100,
	magic:100
};

let botVal = {
	health:100,
	magic:100
};

function attackBot() {
	botVal.health -= 10;
	alert(`bot lost 10hp`);
	updateGame();
}

function updateGame() {
	document.getElementById('playerHealth').innerText = `health: ${playerVal.health}`;
	document.getElementById('playerMagic').innerText = `magic: ${playerVal.magic}`;
	document.getElementById('botHealth').innerText = `health: ${botVal.health}`;
	document.getElementById('botMagic').innerText = `health: ${botVal.magic}`;
}

updateGame();