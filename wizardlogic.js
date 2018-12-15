let playerVal = {
	health:100,
	magic:100
};

let botVal = {
	health:100,
	magic:100
};


function endGame() {
	if(playerVal.health === 0 || playerVal.magic === 0) {
		document.getElementById('endGameId').innerText = 'Dead!';
	} else if ((playerVal.health > 0 || playerVal.magic > 0) && (botVal.health < 1 || botVal.magic < 1)) {
		document.getElementById('endGameId').innerText = 'Victorious!';	
	}
}


function zeroHandler() {

	if(playerVal.health < 1) {
			playerVal.health = 0;
		}
	if(playerVal.magic < 1) {
			playerVal.magic = 0;
		}
	if(botVal.health < 1) {
			botVal.health = 0;
		}
	if(botVal.magic < 1) {
			botVal.magic = 0;
		}	
}
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
bot defends, bot lost 20 magic but gained 3hp`)
	}

	zeroHandler();
	endGame();
	updateGame();
}

function deffendPlayer() {

	let valDecide = Math.floor(Math.random() * 2) //returns random number between 0 and 1
	if(valDecide < 1) {
		//bot attacks
		playerVal.magic -= 20;
		playerVal.health += 3;
		botVal.magic -= 3;
		alert(`you deffended, you lost 20 magic and gained 3hp
bot attacks, bot lost 3 magic,`)

	} 
	else {
		
		//bot deffends
		alert("both defended, nothing happend");
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