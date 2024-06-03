const grid = document.querySelector(".grid");

let redTime = 300;
let blueTime = 300;
let currentPlayer = 1; // 1 for red, 2 for blue
let redInterval;
let blueInterval;

function startClock(player) {
    if (player === 1) {
        redInterval = setInterval(() => {
            if (redTime > 0) {
                redTime--;
                updateClockDisplay(1);
            } else {
                clearInterval(redInterval);
                alert("Player 1's time is up!");
            }
        }, 1000);
    } else if (player === 2) {
        blueInterval = setInterval(() => {
            if (blueTime > 0) {
                blueTime--;
                updateClockDisplay(2);
            } else {
                clearInterval(blueInterval);
                alert("Player 2's time is up!");
            }
        }, 1000);
    }
}

function pauseClock(player) {
    if (player === 1) {
        clearInterval(redInterval);
    } else if (player === 2) {
        clearInterval(blueInterval);
    }
}

function updateClockDisplay(player) {
    let minutes, seconds;
    if (player === 1) {
        minutes = Math.floor(redTime / 60);
        seconds = redTime % 60;
        document.getElementById('red-clock').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else if (player === 2) {
        minutes = Math.floor(blueTime / 60);
        seconds = blueTime % 60;
        document.getElementById('blue-clock').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}


function switchPlayer() {
    if (currentPlayer === 1) {
        pauseClock(1);
        startClock(2);
        currentPlayer = 2;
    } else {
        pauseClock(2);
        startClock(1);
        currentPlayer = 1;
    }
}

// Initialize the clocks
updateClockDisplay(1);
updateClockDisplay(2);

// Start the clock for player 1 at the beginning of the game
startClock(1);



// highlighting possible moves
var pieces = document.querySelectorAll(".piece");
var currentClicked = '';
var destinationClick = '';

function highlight() {
    for (var i = 0; i < pieces.length; i++) {
        pieces[i].addEventListener('click', function (event) {
            var img = event.currentTarget;
            const a = img.parentNode.parentNode.id;
            currentClicked = a;
            if (img.parentNode.id == 'blue_titan') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }

            }

            if (img.parentNode.id == 'red_titan') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }

            if (img.parentNode.id == 'red_tank') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }

            if (img.parentNode.id == 'blue_tank') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }

            if (img.parentNode.id == 'blue_canon') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }
            if (img.parentNode.id == 'red_canon') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }
            if (img.parentNode.id == 'red_ricochet') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }
            if (img.parentNode.id == 'red_sricochet') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }

            if (img.parentNode.id == 'blue_sricochet') {
                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
            }
            if (img.parentNode.id == 'blue_ricochet') {

                for (var i = 1; i <= 64; i++) {
                    document.getElementById(i).style.backgroundColor = "white";
                }
                img.parentNode.parentNode.style.backgroundColor = 'grey';
                if (a < 9) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 9 && a < 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 9).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                if (a > 56) {
                    if (document.getElementById(a - 1).innerHTML.length == 0) {
                        document.getElementById(a - 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) + 1).innerHTML.length == 0) {
                        document.getElementById(Number(a) + 1).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 7).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 7).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 8).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 8).style.backgroundColor = "grey";
                    }
                    if (document.getElementById(Number(a) - 9).innerHTML.length == 0) {
                        document.getElementById(Number(a) - 9).style.backgroundColor = "grey";
                    }
                }
                rotateBlueRicochet(img);
            }
            const piece_id = img.parentNode.parentNode.id;
            var piece_text = img.parentNode.parentNode.innerHTML;

        }

        )
    }
}

highlight();

BlueRotateTemp = "right";

function rotateBlueRicochet(blueRicochet) {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    // const blueRicochet = document.getElementById("blue_ricochet");
    button1.style.visibility = 'visible';
    button2.style.visibility = 'visible';

    button1.addEventListener("click", function () {
        if (BlueRotateTemp == 'right') {
            blueRicochet.parentNode.style.transform = 'rotate(90deg)';
            BlueRotateTemp = 'left';
            clearHighlights();
        }
    });

    button2.addEventListener("click", function () {
        if (BlueRotateTemp == 'left') {
            blueRicochet.parentNode.style.transform = 'rotate(0deg)';
            BlueRotateTemp = 'right';
            clearHighlights();
        }
    });
}



// Global variables to store the selected piece and its original position
let selectedPiece = null;
let selectedPieceId = null;

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener("click", function () {
        if (selectedPiece && square.style.backgroundColor == 'grey' && square.innerHTML == '') {
            square.innerHTML = selectedPiece;
            document.getElementById(selectedPieceId).innerHTML = '';

            // Clear the highlights
            clearHighlights();

            // Reset the selected piece
            selectedPiece = null;
            selectedPieceId = null;
            pieces = document.querySelectorAll(".piece");
            highlight();
            switchPlayer();
            shootCanon();
        }
        else {
            // If no piece is selected, select the piece on the clicked square
            if (square.innerHTML.trim() !== '') {
                selectedPiece = square.innerHTML;
                selectedPieceId = square.id;

            }
        }
    });
});


// Function to clear all highlights
function clearHighlights() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
}


function shootCanon() {
    canon_square = document.getElementById('blue_canon');
    canon_id = canon_square.parentNode.id;
    blue_bullet_square = document.getElementById(Number(canon_id) + 8);
    blue_bullet_square.innerHTML = '<div class="blue_bullet"></div>';
    blue_bullet = document.querySelector('.blue_bullet');
    blue_bullet_id = blue_bullet.parentNode.id;
    square = document.querySelector('.square');
    square_width = square.clientWidth;

    for (i = 1; document.getElementById(Number(blue_bullet_id) + 8 * i) != null; i++) {
        if (document.getElementById(Number(blue_bullet_id) + 8 * i).innerHTML == '') {
            blue_bullet.style.transition = '0.5s';
            blue_bullet.style.transitionDelay = '0.1s';
            blue_bullet.style.translate = '0px ' + (square_width * i) + 'px';
            continue;
        }
        if (document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild && (document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild.id == 'red_canon' || document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild.id == 'red_tank')) {
            blue_bullet.style.translate = '0px ' + (square_width * i) + 'px';
            blue_bullet.style.visibility.transition = '0s';
            blue_bullet.style.visibility = 'hidden';

        }
        if (document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild && document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild.id == 'blue_ricochet') {
            blue_bullet.style.translate = '0px ' + (square_width * i) + 'px';
            if (BlueRotateTemp == 'left') {
                for (var j = 1; document.getElementById(Number(blue_bullet_id) + 8 * i - j) != null && (Number(blue_bullet_id) + 8 * i - j) % 8 != 1; j--) {
                    if (document.getElementById(Number(blue_bullet_id) + 8 * i - j).innerHTML == '') {
                        blue_bullet.style.translate.transition = '0.5s';
                        blue_bullet.style.translate.transitionDelay = '0.1s';
                        blue_bullet.style.translate = '-' + (square_width * j) + 'px ' + (square_width * i) + 'px';
        
                    }
                }
            }
            if (BlueRotateTemp == 'right') {
                for (var j = 1; document.getElementById(Number(blue_bullet_id) + 8 * i + j) != null && (Number(blue_bullet_id) + 8 * i - j) % 8 != 1; j++) {
                    if (document.getElementById(Number(blue_bullet_id) + 8 * i + j).innerHTML == '') {
                        blue_bullet.style.translate.transition = '0.5s';
                        blue_bullet.style.translate.transitionDelay = '0.1s';
                        blue_bullet.style.translate = (square_width * j) + 'px ' + (square_width * i) + 'px';
        
                    }
                }

            }
            break;
        }
        if (document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild && document.getElementById(Number(blue_bullet_id) + 8 * i).firstElementChild.id == 'red_titan') {
            blue_bullet.style.translate = '0px ' + (square_width * i) + 'px';
            blue_bullet.style.visibility.transition = '0s';
            blue_bullet.style.visibility = 'hidden';
            endGame('Blue');
        }

    }
}
function endGame(a) {
    if (a == 'Blue') {
        alert("Blue has won!");
    }
    if (a == 'Red') {
        alert("Red has won!");
    }
}
function emptyFunction(){
    console.log('empty');
}