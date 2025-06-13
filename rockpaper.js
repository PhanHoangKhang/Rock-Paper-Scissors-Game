const choices = ["Rock", "Paper", "Scissors"];
const userChoice = document.getElementById("user_choice");
const computerChoice = document.getElementById("computer_choice");
const result_final = document.getElementById("final_result");
const computer_score = document.getElementById("score_computer");
const user_score = document.getElementById("score_user");
const timeplay = document.getElementById("time_play");
let userScore = 0;
let computerScore = 0;
let count = 0;

function play(userchoose) {
    count++;
    const computerchoose = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (userchoose === computerchoose) {
        result = "IT'S A TIE";
    }
    else {
        switch(userchoose) {
            case "Rock":
                result = (computerchoose === "Paper") ? "COMPUTER WINS" : "USER WINS";
                break;
            case "Paper":
                result = (computerchoose === "Scissors") ? "COMPUTER WINS" : "USER WINS";
                break;
            case "Scissors":
                result = (computerchoose === "Rock") ? "COMPUTER WINS" : "USER WINS";
                break;
        }
    }
    result_final.classList.remove("greenText", "redText");
    switch(result) {
        case "USER WINS":
            result_final.classList.add("greenText");
            userScore++;
            break;
        case "COMPUTER WINS":
            result_final.classList.add("redText");
            computerScore++;
            break;
    }
    timeplay.textContent = `Time played: ${count}`;
    userChoice.textContent = `User choose: ${userchoose}`;
    computerChoice.textContent = `Computer choose: ${computerchoose}`;
    result_final.textContent = result;
    user_score.textContent = `User score: ${userScore}`;
    computer_score.textContent = `Computer score: ${computerScore}`;
}

function reset() {
    userScore = 0;
    computerScore = 0;
    count = 0;
    result_final.classList.remove("greenText", "redText");
    timeplay.textContent = `Time played: ${count}`;
    userChoice.textContent = `User choose: `;
    computerChoice.textContent = `Computer choose: `;
    result_final.textContent = `RESULT`;
    user_score.textContent = `User score: `;
    computer_score.textContent = `Computer score: `;
}