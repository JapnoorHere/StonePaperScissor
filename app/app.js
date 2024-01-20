let turn_text1 = document.getElementById("turn-text1");
let turn_text2 = document.getElementById("turn-text2");

let you_points = document.getElementById("you-points");
let computer_points = document.getElementById("computer-points");

let gameActions = document.querySelectorAll(".img-container");

let rock = gameActions[0];
let paper = gameActions[1];
let scissor = gameActions[2];

let nextBtn = document.getElementById("next");
let resetBtn = document.getElementById("reset");

let userCount = 0;
let computerCount = 0;

const getRandom = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  return random;
};

const setText = (text1, text2) => {
  turn_text1.innerHTML = text1;
  turn_text2.innerHTML = text2;
};

function getResult(move) {
  let computerMove = getRandom();
  let userMove = move;

  if (computerMove == 1 && userMove == 1) {
    setText("Game Tied!", "Both Selected Rock");
  } else if (computerMove == 2 && userMove == 2) {
    setText("Game Tied!", "Both Selected Paper");
  } else if (computerMove == 3 && userMove == 3) {
    setText("Game Tied!", "Both Selected Scissor");
  } else if (computerMove == 1 && userMove == 3) {
    ++computerCount;
    setText("Computer Won!", "Rock beats Scissor");
  } else if (computerMove == 2 && userMove == 1) {
    ++computerCount;
    setText("Computer Won!", "Paper wraps Rock");
  } else if (computerMove == 3 && userMove == 2) {
    ++computerCount;
    setText("Computer Won!", "Scissor cuts Paper!");
  } else if (computerMove == 3 && userMove == 1) {
    ++userCount;
    setText("You Won!", "Rock beats Scissor");
  } else if (computerMove == 1 && userMove == 2) {
    ++userCount;
    setText("You Won!", "Paper wraps Rock");
  } else if (computerMove == 2 && userMove == 3) {
    ++userCount;
    setText("You Won!", "Scissor cuts Paper!");
  }

  console.log(userCount);
  console.log(computerCount);

  you_points.innerHTML = userCount;
  computer_points.innerHTML = computerCount;

  gameActions.forEach((element) => {
    element.disabled = true;
    element.classList.remove("hover");
    element.style.cursor = "default";
  });
}

rock.addEventListener("click", function () {
  getResult(1);
});

paper.addEventListener("click", function () {
  getResult(2);
});

scissor.addEventListener("click", function () {
  getResult(3);
});

function nextRound() {
  turn_text1.innerHTML = "Computer made it's choice";
  turn_text2.innerHTML = "Choose yours";
  gameActions.forEach((element) => {
    element.disabled = false;
    element.classList.add("hover");
    element.style.cursor = "pointer";
  });
}

nextBtn.addEventListener("click", nextRound);

function resetGame() {
  userCount = 0;
  computerCount = 0;
  you_points.innerHTML = userCount;
  computer_points.innerHTML = computerCount;
  turn_text1.innerHTML = "Computer made it's choice";
  turn_text2.innerHTML = "Choose yours";
  gameActions.forEach((element) => {
    element.disabled = false;
    element.classList.add("hover");
    element.style.cursor = "pointer";
  });
}

resetBtn.addEventListener("click", resetGame);
