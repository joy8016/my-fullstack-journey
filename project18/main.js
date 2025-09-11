console.log("Tic Tac Toe")

let music = new Audio("music.mp3");

let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")
let turn = "x";
let isgameover = false;


//function to change the turn 
const changeTurn = () => {
    return turn === "x" ? "o" : "x";
}

//function to check for a win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[0]].innerHTML !== "")) {
            document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + " won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"

        }
    })
}





//game logic

// document.addEventListener('click', () => {

//   music.play().catch(error => {
//     console.error('Playback failed:', error);
//   });
// });

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!isgameover) {

                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }


        }
    })
})

let button = document.getElementById('reset');

button.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerHTML = "";
    })
    turn = "x";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"



})





