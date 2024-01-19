let turn_text1 = document.getElementById('turn-text1');
let turn_text2 = document.getElementById('turn-text2');

let you_points = document.getElementById('you-points');
let computer_points = document.getElementById('computer-points');

let gameActions = document.querySelectorAll(".img-container");
let rock = gameActions[0];
let paper = gameActions[1];
let scissor = gameActions[2];

let nextGame = document.getElementById('next');
let resetGame = document.getElementById('reset');

const getRandom = ()=>{
    let random = Math.floor(Math.random() *3) + 1;
    return random;
}

const setText = (text1,text2)=>{
    turn_text1.innerHTML = text1;
    turn_text2.innerHTML = text2;
}


const getResult = (move)=>{
    gameActions.forEach((element)=>{
        element.addEventListener("click")
    });
    console.log("Hello");
    let computerMove = getRandom();
    let userMove = move;

    if(computerMove == 1 &&  userMove == 1){
        setText("Game Tied!","Both Selected Rock");
    }
    else if(computerMove == 2 &&  userMove == 2){
        setText("Game Tied!","Both Selected Paper");
    }
    if(computerMove == 3 &&  userMove == 3){
        setText("Game Tied!","Both Selected Scissor");
    }
    else if(computerMove == 1 && userMove == 3){
        setText("Computer Won!","Rock beats Scissor");
    }
    else if(computerMove == 2 && userMove == 1){
        setText("Computer Won!","Paper wraps Rock");
    }
    else if(computerMove == 3 && userMove == 2){
        setText("Computer Won!","Scissor cuts Paper!");
    } 
    else if(computerMove == 3 && userMove == 1){
        setText("You Won!","Rock beats Scissor");
    }
    else if(computerMove == 1 && userMove == 2){
        setText("You Won!","Paper wraps Rock");
    }
    else if(computerMove == 2 && userMove == 3){
        setText("You Won!","Scissor cuts Paper!");
    }

}


rock.addEventListener('click',()=>getResult(1));

paper.addEventListener('click',()=>getResult(2));

scissor.addEventListener('click',()=>getResult(3));

