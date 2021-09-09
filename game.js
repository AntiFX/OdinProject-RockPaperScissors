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
        return("It was a tie!");
    } else if (cC == "rock" && pC == "scissors"){
        return("You Lose! Rock beats scissors");
    } else if (cC == "rock" && pC == "paper"){
        return("You Win! Paper beats rock");
    } else if (cC == "paper" && pC == "scissors"){
        return("You Win! Scissors beats rock");
    } else if (cC == "paper" && pC == "rock"){
        return("You Lose! Paper beats rock");
    } else if (cC == "scissors" && pC == "paper"){
        return("You Lose! Scissors beats paper");
    } else if (cC == "scissors" && pC == "rock"){
        return("You Win! Rock beats Scissors");
    } else {
        return("Something went wrong")
    }

}
//function to get the player selection
function playerPlay(){
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase()
    const computerChoice = computerPlay();
    console.log(winner(computerChoice, playerChoice));
}



playerPlay();