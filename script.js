let playerScore = 0;
let computerScore = 0;
let round = 0;

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



//get ROCK choice from player
const btn1 = document.getElementById("rock");
btn1.addEventListener("click", playerSelectionRock);
btn1.addEventListener("click", playRound);
function playerSelectionRock(){
    playerSelection = document.getElementById("rock").textContent.toLowerCase();
    console.log(playerSelection);
}
//get PAPER choice from player
const btn2 = document.getElementById("paper");
btn2.addEventListener("click",playerSelectionPaper);
btn2.addEventListener("click", playRound);
function playerSelectionPaper(){
    playerSelection = document.getElementById("paper").textContent.toLowerCase();
    console.log(playerSelection);
}
//get SCISSORS choice from player
const btn3 = document.getElementById("scissors");
btn3.addEventListener("click",playerSelectionScissors);
btn3.addEventListener("click", playRound);
function playerSelectionScissors(){
    playerSelection = document.getElementById("scissors").textContent.toLowerCase();
    console.log(playerSelection);
}


//create variable to 
const resultArea = document.querySelector('.resultArea')


//create array to log round result
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
resultArea.insertAdjacentElement('afterbegin', resultsLog);

//log every result in a list
function gameLog(){
    var li = document.createElement('li');
    li.textContent = resultsArray[`${resultsArray.length-1}`];
    resultsLog.insertAdjacentElement('afterbegin', li);
}


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

//start each round
function playRound(){
    computerPlay();
    //playerChoice();
    whoWin();
}



