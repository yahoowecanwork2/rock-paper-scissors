let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const msgPara = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    msgPara.textContent = "It's a draw!";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore;
        msgPara.textContent = `You win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.textContent = compScore;
        msgPara.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
