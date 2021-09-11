//initialize values for playerScore and computerScore
//keeps track of wins over many rounds
let playerScore = 0;
let computerScore = 0;
//function to make the computer choose rock paper or scissors
function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return(options[randomChoice]);
}
//takes in computerChoice (cC) and playerChoice (pC)
//Prints to the console who won and why
//returns a number. 0 for tie, 1 for player win, 2 for computer win
//3 for unknown/error
//a different method than if/else statements might work better
function winner(cC, pC){
    if (cC === pC){
        return("It was a tie!");
    } else if (cC == "rock" && pC == "scissors"){
        computerScore++;
        return("You Lose! Rock beats scissors");
    } else if (cC == "paper" && pC == "rock"){
        computerScore++;
        return("You Lose! Paper beats rock");
    } else if (cC == "scissors" && pC == "paper"){
        computerScore++;
        return("You Lose! Scissors beats paper");
    } else {
        return("You won! " + pC + " beats " + cC);
    }

}
//function to get the player selection
function playerPlay(playerChoice){
    const computerChoice = computerPlay();
    //returns the result (0,1,2 or 3) from winner function
    return winner(computerChoice, playerChoice);
}

const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      result = playerPlay(button.id);
      document.querySelector(".results").textContent = result;
      document.querySelector(".playerScore").textContent = "Your score is: " + playerScore;
      document.querySelector(".computerScore").textContent = "Computer's score is: " + computerScore;
      if (computerScore === 5 || playerScore === 5){
          if (computerScore === 5){
            document.querySelector(".computerScore").textContent = "The computer won.";
          } else if (playerScore === 5){
            document.querySelector(".playerScore").textContent = "You won!";
          }
          playerScore = 0;
          computerScore = 0;
      }
    });
  });