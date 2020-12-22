var playerScore = 0
var compScore = 0




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function compThrow() {
  let compRand = getRandomInt(1, 4);
  if (compRand == 1) {
    return 'rock';
  } else if (compRand == 2) {
    return 'paper';
  } else if (compRand == 3) {
    return 'scissors'
  }
}

function playRound(playerselection) {
  let compChoice = compThrow();
  if (compChoice == playerselection) {
    document.getElementById("results").innerHTML = ('Tie game, no points')
  } else if ((playerselection == 'rock' && compChoice == 'scissors') ||
    (playerselection == 'scissors' && compChoice == 'paper') ||
    (playerselection == 'paper' && compChoice == 'rock')) {
    playerScore = (playerScore + 1)
    document.getElementById("results").innerHTML = ('You selected ' + playerselection + ' and the computer selected ' + compChoice + ".<br> You win! <br>   " + "Your score is: " + playerScore + "   Opponents score is: " + compScore)
    if (playerScore == 5) {
      playerScore = 0
      compScore = 0
      document.getElementById("results").innerHTML = ("You win! You may continue playing if you wish.");
    }
  } else {
    compScore = (compScore + 1)
    document.getElementById("results").innerHTML = ('You selected ' + playerselection + ' and the computer selected ' + compChoice + '.<br> You lose!<br>   ' + "Your score is: " + playerScore + "   Opponents score is: " + compScore)
  }
  if (compScore == 5) {
    playerScore = 0
    compScore = 0
    document.getElementById("results").innerHTML = ('You lose! Loser! Try again!')
  }
}
