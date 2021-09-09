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
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase()
    const computerChoice = computerPlay();
    return winner(computerChoice, playerChoice);
}




let timestoPlay = parseInt(prompt("How many times would you like to play?"));
while (+timestoPlay > 0){
    let round = playerPlay();
    if (round == 1){
        playerScore++;
    } else if (round == 2) {
        computerScore++;
    }
    timestoPlay--
}

console.log("The computer won " + computerScore + " times");
console.log("You won " + playerScore + " times");
if (computerScore > playerScore){
    console.log("Sorry, the computer won this time");
} else if (playerScore > computerScore){
    console.log("Congrats! You won!");
} else {
    console.log("An error occured");
}