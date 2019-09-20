console.log("BUTTS - JS is loaded!");

// Global Variables
var pChoice;
var cChoice;
var playerWin = '';
var playOptions = ['rock', 'paper', 'scissors'];

// DOM References
var buttonDiv = document.querySelector('.buttons');
var resultText = document.querySelector('.result h2');
var cChoiceText = document.getElementById('cChoice');

// Functions
var displayResults = function() {
  cChoiceText.textContent = playOptions[cChoice];
  resultText.textContent = playerWin;
}

var checkForWin = function() {
  // Compare weapons
  if (pChoice !== cChoice) {
    switch(pChoice) {
      case 0: // Player chose rock
        playerWin = cChoice === 1 ? 'You Lose' : 'You Win!';
        break;
      case 1: // Player chose paper
        playerWin = cChoice === 2 ? 'You Lose' : 'You Win!';
        break;
      case 2: // Player chose scissors
        playerWin = cChoice === 0 ? 'You Lose' : 'You Win!';
        break;
    }
  } else {
    playerWin = 'Yall tied';
  }
  displayResults();
}

var computerTurn = function() {
  // Computer chooses weapon randomly
    // Generate a number between 1 and 3
    cChoice = Math.floor(Math.random() * 3);
    // Use that as index to the weapon array
    checkForWin();
}

// Event Handlers
buttonDiv.addEventListener('click', function(e) {
  // Player chooses rock, paper, or scissors
    // Save the value of the button clicked
  e.stopPropagation();
  pChoice = parseInt(e.target.id);
  console.log(pChoice);

  // Now the computer goes...
  computerTurn();
});

