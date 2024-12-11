const winningChances = "123456789147258369159357";

let player1Input = "";
let player2Input = "";

function showGameResult(player) {
  return player + " won the game🏆🥇";
}

function addInput(symbol, playerChoice) {
  if (symbol === "❌") {
    player1Input += playerChoice;
  }

  if (symbol === "⭕️") {
    player2Input += playerChoice;
  }
}

function isUserWon(playerInput) {
  let string = "";
  let noOfCharSimilar = 0
  for (let index = 0; index < winningChances.length; index++) {
    string += winningChances[index];

    if ((index + 1) % 3 === 0) {
      noOfCharSimilar = noOfCharEqual(string, playerInput, 0, 0, 0);
      string = 0;
    }

    if (noOfCharSimilar === 3) {
      return true;
    }
  }

  return false;
}

function noOfCharEqual(string, subString, index, index1, count) {
  if (index >= string.length) {
    return count;
  }

  if (string[index] === subString[index1]) {
    count += 1;
  }

  if (index1 >= subString.length) {
    return noOfCharEqual(string, subString, index + 1, 0, count);
  }

  return noOfCharEqual(string, subString, index, index1 + 1, count);
}

function updateBoard(index, board, playerChoice, newBoard, symbol) {
  if (index === board.length) {
    return newBoard;
  }

  if (board[index] === playerChoice) {
    newBoard += symbol;
    addInput(symbol, playerChoice)
    index = index + 2;
  }

  newBoard += board[index];
  return updateBoard(index + 1, board, playerChoice, newBoard, symbol);
}

function getSymbol(input) {
  return input % 2 === 0 ? "⭕️" : "❌";
}

function getUserChoice() {
  const userChoice = prompt("enter userChoice: ");

  if (userChoice < 1 || userChoice > 9) {
    console.log("Invalid input! Please enter a number ");
    return getUserChoice();
  }

  return userChoice;
}

function playGame(index, board) {
  if (index === 0) {
    return "the game is draw";
  }

  const userInput = getUserChoice();
  const symbol = getSymbol(index);
  const newBoard = updateBoard(0, board, userInput, "", symbol);
  console.log(newBoard);

  if (isUserWon(player1Input, 0)) {
    return showGameResult("first player");
  }

  if (isUserWon(player2Input, 0)) {
    return showGameResult("second player");
  }

  return playGame(index - 1, newBoard);
}

function horizontalLine(string, index) {
  if (index === 0) {
    return "";
  }
  return string + horizontalLine(string, index - 1);
}

function getBoard(string, board) {
  for (let index = 1; index <= 9; index++) {
    board += " " + index + string;

    if (index % 3 === 0) {
      board += "\n" + horizontalLine("-", 12) + "\n";
    }
  }

  return board;
}

const board = getBoard(" |", "");
console.log(board);

console.log(playGame(9, board));
