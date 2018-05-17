var selectButton = document.getElementById("selectXO");
var start = document.getElementById("start");
var playerTwo = document.getElementById("p2XO");
var X = document.getElementById("X");
var O = document.getElementById("O");
var winGame = document.getElementById("winGame");
var reset = document.getElementById("playAgain");
var play = document.getElementsByClassName("play");
var nextTurn = 'playOne';
var canPlace = false;
var p1Score = 0;
var p2Score = 0;
var tieScore = 0;

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

function selectXO() {
    if (X.checked) {
        playerTwo.textContent = "O";
    } else {
        playerTwo.textContent = "X";
    }
    start.addEventListener('click', canPlaceXO);
}

function canPlaceXO() {
    canPlace = true;
    one.addEventListener('click', placeXO);
    two.addEventListener('click', placeXO);
    three.addEventListener('click', placeXO);
    four.addEventListener('click', placeXO);
    five.addEventListener('click', placeXO);
    six.addEventListener('click', placeXO);
    seven.addEventListener('click', placeXO);
    eight.addEventListener('click', placeXO);
    nine.addEventListener('click', placeXO);
}

function changeTurn() {
    if (nextTurn == 'playOne') {
        nextTurn = 'playTwo';
    } else if (nextTurn == 'playTwo') {
        nextTurn = 'playOne';
    }
}

function placeXO() {
    if (canPlace == true) {
        if ((nextTurn == 'playOne' && X.checked) || (nextTurn == 'playTwo' && O.checked)) {
            if ((this.id == '1' || this.id == '2' || this.id == '3' || this.id == '4' || this.id == '5' || this.id == '6' || this.id == '7' || this.id == '8' || this.id == '9') && this.textContent !== 'O' && this.textContent !== 'X') {
                this.textContent = 'X';
                changeTurn();
            }
        } else if ((nextTurn == 'playTwo' && X.checked) || (nextTurn == 'playOne' && O.checked)) {
            if ((this.id == '1' || this.id == '2' || this.id == '3' || this.id == '4' || this.id == '5' || this.id == '6' || this.id == '7' || this.id == '8' || this.id == '9') && this.textContent !== 'O' && this.textContent !== 'X') {
                this.textContent = 'O';
                changeTurn();
            }
        } else {

        }
    }
    if ((X.checked && ((one.textContent == 'X' && two.textContent == 'X' && three.textContent == 'X') || (four.textContent == 'X' && five.textContent == 'X' && six.textContent == 'X') || (seven.textContent == 'X' && eight.textContent == 'X' && nine.textContent == 'X') || (one.textContent == 'X' && four.textContent == 'X' && seven.textContent == 'X') || (two.textContent == 'X' && five.textContent == 'X' && eight.textContent == 'X') || (three.textContent == 'X' && six.textContent == 'X' && nine.textContent == 'X') || (one.textContent == 'X' && five.textContent == 'X' && nine.textContent == 'X') || (three.textContent == 'X' && five.textContent == 'X' && seven.textContent == 'X'))) || (O.checked && (((one.textContent == 'O' && two.textContent == 'O' && three.textContent == 'O') || (four.textContent == 'O' && five.textContent == 'O' && six.textContent == 'O') || (seven.textContent == 'O' && eight.textContent == 'O' && nine.textContent == 'O') || (one.textContent == 'O' && four.textContent == 'O' && seven.textContent == 'O') || (two.textContent == 'O' && five.textContent == 'O' && eight.textContent == 'O') || (three.textContent == 'O' && six.textContent == 'O' && nine.textContent == 'O') || (one.textContent == 'O' && five.textContent == 'O' && nine.textContent == 'O') || (three.textContent == 'O' && five.textContent == 'O' && seven.textContent == 'O'))))) {
        winGame.textContent = 'Player 1 wins!';
        reset.textContent = 'Play Again';
        p1Score = p1Score + 1;
        document.getElementById("scoreP1").textContent = p1Score;
    } else if ((O.checked && ((one.textContent == 'X' && two.textContent == 'X' && three.textContent == 'X') || (four.textContent == 'X' && five.textContent == 'X' && six.textContent == 'X') || (seven.textContent == 'X' && eight.textContent == 'X' && nine.textContent == 'X') || (one.textContent == 'X' && four.textContent == 'X' && seven.textContent == 'X') || (two.textContent == 'X' && five.textContent == 'X' && eight.textContent == 'X') || (three.textContent == 'X' && six.textContent == 'X' && nine.textContent == 'X') || (one.textContent == 'X' && five.textContent == 'X' && nine.textContent == 'X') || (three.textContent == 'X' && five.textContent == 'X' && seven.textContent == 'X'))) || (X.checked && (((one.textContent == 'O' && two.textContent == 'O' && three.textContent == 'O') || (four.textContent == 'O' && five.textContent == 'O' && six.textContent == 'O') || (seven.textContent == 'O' && eight.textContent == 'O' && nine.textContent == 'O') || (one.textContent == 'O' && four.textContent == 'O' && seven.textContent == 'O') || (two.textContent == 'O' && five.textContent == 'O' && eight.textContent == 'O') || (three.textContent == 'O' && six.textContent == 'O' && nine.textContent == 'O') || (one.textContent == 'O' && five.textContent == 'O' && nine.textContent == 'O') || (three.textContent == 'O' && five.textContent == 'O' && seven.textContent == 'O'))))) {
        winGame.textContent = 'Player 2 wins!';
        reset.textContent = 'Play Again';
        p2Score = p2Score + 1;
        canPlace = false;
        document.getElementById("scoreP2").textContent = p2Score;
    } else if ((one.textContent == 'X' || one.textContent == 'O') && (two.textContent == 'X' || two.textContent == 'O') && (three.textContent == 'X' || three.textContent == 'O') && (four.textContent == 'X' || four.textContent == 'O') && (five.textContent == 'X' || five.textContent == 'O') && (six.textContent == 'X' || six.textContent == 'O') && (seven.textContent == 'X' || seven.textContent == 'O') && (eight.textContent == 'X' || eight.textContent == 'O') && (nine.textContent == 'X' || nine.textContent == 'O')) {
        winGame.textContent = 'Game Over!';
        reset.textContent = 'Play Again';
        tieScore = tieScore + 1;
        document.getElementById("scoreTie").textContent = tieScore;
        canPlace = false;
    } else {}
}

function playAgain() {
    one.textContent = '';
    two.textContent = '';
    three.textContent = '';
    four.textContent = '';
    five.textContent = '';
    six.textContent = '';
    seven.textContent = '';
    eight.textContent = '';
    nine.textContent = '';

    nextTurn = 'playOne';
    reset.textContent = 'Restart';
    winGame.textContent = '';
}

selectButton.addEventListener('click', selectXO);
reset.addEventListener('click', playAgain);

function Box(xpos, ypos, xstep, ystep, color, id) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xstep = xstep;
    this.ystep = ystep;
    this.id = id;
    this.color = color;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.ypos + 'px';
        elem.style.left = this.xpos + 'px';
        elem.style.backgroundColor = color;
    }
}

var boxes = [];
var numBoxes = 150;
var container = document.getElementById("boxes");

for (var i = 0; i < numBoxes; i++) {
    var elem = document.createElement("div");
    elem.className = "box";
    elem.id = "box" + i;
    container.appendChild(elem);
    boxes[i] = new Box(Math.random() * (outerWidth - 100),
        Math.random() * outerHeight,
        Math.random(),
        Math.random() * .7,
        '#' + Math.floor(Math.random() * 13000).toString(),
        elem.id);
}

var id = setInterval(frame, 5);

function frame() {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].xpos > 350 || boxes[i].xpos < 0) {}
        if (boxes[i].ypos > 700 || boxes[i].ypos < 0) {
            boxes[i].ypos = 0;
            boxes[i].xpos = (outerWidth - 100) * Math.random();
        }

        boxes[i].ypos = boxes[i].ypos + boxes[i].ystep;
        boxes[i].render();
    }
}
