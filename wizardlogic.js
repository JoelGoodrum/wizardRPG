let playerVal = {
	health:100,
	magic:100
};

let botVal = {
	health:100,
	magic:100
};

function updateGame() {
	document.getElementById('playerHealth').innerText = `health: ${playerVal.health}`;
	document.getElementById('playerMagic').innerText = `magic: ${playerVal.magic}`;
	document.getElementById('botHealth').innerText = `health: ${botVal.health}`;
	document.getElementById('botMagic').innerText = `magic: ${botVal.magic}`;
}

function attackBot() {

	let valDecide = Math.floor(Math.random() * 2) //returns random number between 0 and 1
	if(valDecide < 1) {
		//bot attacks
		botVal.health -= 10;
		playerVal.health -= 10;
		alert(`you attacked, bot lost 10hp
bot attacked, you lost 10hp`);
	} 
	else {
		//bot defend
		playerVal.magic -= 3;
		botVal.health += 3;
		botVal.magic -= 20;
		alert(`you attacked, you lost 3 magic
bot defends, bot lost 20 magic, bot gain 3hp`)
	}

	
	updateGame();
}

function botReact() {
	let valDecide = Math.floor(Math.random() * 2); //returns random number between 0 and 1
	if(valDecide === 0) {
		//bot attack
	} else {
		//bot defend
	}
}



updateGame();