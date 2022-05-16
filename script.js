//computer random generate R/P/S
function computerPlay(){
    //randomly select a num between 1-3
    computerNum = Math.floor(Math.random()*3)+1;
    //assign them to R/P/S if 1/2/3 is selected
    if (computerNum === 1) {
        computerSelection = "rock";
    } else if (computerNum === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    console.log(computerSelection);
}


//convert player input to lower case
function playerChoice(){
    playerSelection = document.getElementById("playerChoice").value.toLowerCase();
    console.log(playerSelection);
}

const resultArea = document.querySelector('.resultArea  ')


//create array to log round result
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
resultArea.insertAdjacentElement('beforeend', resultsLog);

//log every result in a list
function gameLog(){
    var li = document.createElement('li');
    li.textContent = resultsArray[`${resultsArray.length -1}`];
    resultsLog.insertAdjacentElement('afterbegin', li);
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

//compare Computer and Player result
//store and add score
function whoWin(){
    round++;
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        console.log("Player Wins!");
        playerScore++;
        resultsArray.push(`You win round ${round}, Player: ${playerSelection}, Computer: ${computerSelection}. Score: ${playerScore}-${computerScore}`);
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        console.log("Computer Wins :(");
        computerScore++;
        resultsArray.push(`Computer win round ${round}, Player: ${playerSelection}, Computer: ${computerSelection}. Score: ${playerScore}-${computerScore}`);
    }
    else {
        console.log("Tie");
        resultsArray.push(`Tie in round ${round}. Score: ${playerScore}-${computerScore}`)
    }
    console.log(resultsArray);
    gameLog();
}

//calcualte total score
function totalScore(){
    console.log(playerScore, computerScore);
    if (playerScore>computerScore){
        console.log("Player Wins");
    }
    else if (playerScore<computerScore){
        console.log("You Lost. Try harder next time");
    }
    else if (playerScore==computerScore){
        console.log("Tie");
    }
}

//start each round
function playRound(){
    computerPlay();
    playerChoice();
    whoWin();
    if (round==5){
        totalScore();
    }
}



