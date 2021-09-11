//initialize values for playerScore and computerScore
//keeps track of wins over many rounds
let playerScore = 0;
let computerScore = 0;
//function to make the computer choose rock paper or scissors
function computerPlay(){
    let options = ["rock", "paper", "scissors"];
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
        console.log("It was a tie!");
        return(0);
    } else if (cC == "rock" && pC == "scissors"){
        console.log("You Lose! Rock beats scissors");
        return(2);
    } else if (cC == "rock" && pC == "paper"){
        console.log("You Win! Paper beats rock");
        return(1);
    } else if (cC == "paper" && pC == "scissors"){
        console.log("You Win! Scissors beats rock");
        return(1);
    } else if (cC == "paper" && pC == "rock"){
        console.log("You Lose! Paper beats rock");
        return(2);
    } else if (cC == "scissors" && pC == "paper"){
        console.log("You Lose! Scissors beats paper");
        return(2);
    } else if (cC == "scissors" && pC == "rock"){
        console.log("You Win! Rock beats Scissors");
        return(1);
    } else {
        console.log("Something went wrong")
        return("error");
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
      console.log(playerPlay(button.id));
    });
  });