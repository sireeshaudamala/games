const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

function doesUserWantToPlayAgain() {
  return confirm("do you want to play again");
}

function isValidInput(userChoice) {
  return (1 <= userChoice && userChoice <= 3);
}

function showGameResult(isUserWon, userChoice, computerChoice) {
  console.log("computerChoice: " + computerChoice)
  if (userChoice === computerChoice) {
    return "tied";
  }

  if (isUserWon) {
    return "congratulations!, you won.";
  }

  return "oh sorry! , you loose.";
}

function noOfCharEqual(userChoice, computerChoice) {
  const choicePairs = userChoice + computerChoice;

  return choicePairs === "13" || choicePairs === "21" || choicePairs === "32";
}

function getUserChoice() {
  const userChoice = +prompt("enter number to select 1.rock,2.paper,3.scissor");
  if (!isValidInput(userChoice)) {
    console.log("Invalid input! Please enter a number ");
    return getUserChoice();
  }

  return userChoice;
}

function getComputerChoice() {
  return Math.ceil(Math.random() * 3);
}

function welcomeMessage() {
  console.clear();

  return "--welcome to rock🪨 paper📑 scissor✂️ game ----";
}

function playGame() {
  console.log(welcomeMessage());

  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const isUserWon = noOfCharEqual(userChoice, computerChoice);
  console.log(showGameResult(isUserWon, userChoice, computerChoice));

  if (!doesUserWantToPlayAgain()) {
    return "thanks for playing";
  }

  return playGame();
}

playGame();
