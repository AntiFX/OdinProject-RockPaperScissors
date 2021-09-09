//initialize values for playerScore and computerScore
//keeps track of wins over many rounds
let playerScore = 0;
let computerScore = 0;
//function to make the computer choose rock paper or scissors
function computerPlay(){
    //create an array with the possible choices
    let options = ["rock", "paper", "scissors"];
    //choose a random number from 0 to 3
    let randomChoice = Math.floor(Math.random() * 3);
    //reference the array with the number chosen to get the proper result
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
function playerPlay(){
    //gets the lowecase version of user input
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase()
    //useers the computerPlay function to get the random computer choice, in string form
    const computerChoice = computerPlay();
    //returns the result (0,1,2 or 3) from winner function
    return winner(computerChoice, playerChoice);
}



//get user input for how many times they want to play, convert it to an integer
let timestoPlay = parseInt(prompt("How many times would you like to play?"));
//while loop to play as many times as selected
while (+timestoPlay > 0){
    //runs the whole game logic
    let round = playerPlay();
    //checks if player won or lost based on the winner function return values
    if (round == 1){
        playerScore++;
    } else if (round == 2) {
        computerScore++;
    }
    timestoPlay--
}

//may help to put this in a function, prints out how many times the computer won, then how many times the player won
console.log("The computer won " + computerScore + " times");
console.log("You won " + playerScore + " times");

//also may be better in a function
//check who won the overall game, player or computer
if (computerScore > playerScore){
    console.log("Sorry, the computer won this time");
} else if (playerScore > computerScore){
    console.log("Congrats! You won!");
} else {
    console.log("An error occured");
}