console.log("Tic Tac Toe")
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")
let turn = "x";


//function to change the turn 
const changeTurn = ()=>{
    return turn === "x"? "o": "x";
}










 let boxes = document.getElementsByClassName("box")
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            // checkWin();
            document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;

        }
    })
 })