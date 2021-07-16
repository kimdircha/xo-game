window.addEventListener("DOMContentLoaded", function() {
    let score = new Array(9);
    resetGame();
    let gameScore = [0, 0];

    function getRandomChoice() {
        let kataklar = document.getElementsByClassName("col-4");
        let rdm = Math.random();
        let computerChoice;
        if (rdm < 0.111)
            computerChoice = 0;
        else if (rdm < 0.222)
            computerChoice = 1;
        else if (rdm < 0.333)
            computerChoice = 2;
        else if (rdm < 0.444)
            computerChoice = 3;
        else if (rdm < 0.556)
            computerChoice = 4;
        else if (rdm < 0.667)
            computerChoice = 5;
        else if (rdm < 0.778)
            computerChoice = 6;
        else if (rdm < 0.889)
            computerChoice = 7;
        else
            computerChoice = 8;
        
        if (kataklar[computerChoice].childNodes[1].classList.contains("bi-x-lg") || kataklar[computerChoice].childNodes[1].classList.contains("bi-circle")) {
            getRandomChoice();
        } else {
            kataklar[computerChoice].childNodes[1].classList.add("bi-circle");
            score[computerChoice] = 2;
            setTimeout(getWinner, 100);
        }
    }

    function resetGame() {
        let kataks = document.getElementsByClassName("col-4");
        for (var h=0;h<kataks.length;h++) {
            if (kataks[h].childNodes[1].classList.contains("bi-x-lg")) {
                kataks[h].childNodes[1].classList.remove("bi-x-lg");
            } else if (kataks[h].childNodes[1].classList.contains("bi-circle")) {
                kataks[h].childNodes[1].classList.remove("bi-circle");
            }
            score[h] = 0;
        }
    }

    function getWinner() {
        let winner = document.querySelectorAll(".modal-body")[0];
        if (score[0] == 1 && score[1] == 1 && score[2] == 1 || score[3] == 1 && score[4] == 1 && score[5] == 1 || score[6] == 1 && score[7] == 1 && score[8] == 1 || score[0] == 1 && score[3] == 1 && score[6] == 1 || score[1] == 1 && score[4] == 1 && score[7] == 1 || score[2] == 1 && score[5] == 1 && score[8] == 1 || score[0] == 1 && score[4] == 1 && score[8] == 1 || score[2] == 1 && score[4] == 1 && score[6] == 1) {
            winner.innerHTML = "You win!<i class=\"bi bi-trophy-fill text-warning ms-1\"></i>";
            winner.classList.add("bg-success");
            winner.style.color="white";
            gameScore[0]++;
            document.getElementById("winner").click();
            resetGame();
        } else if (score[0] == 2 && score[1] == 2 && score[2] == 2 || score[3] == 2 && score[4] == 2 && score[5] == 2 || score[6] == 2 && score[7] == 2 && score[8] == 2 || score[0] == 2 && score[3] == 2 && score[6] == 2 || score[1] == 2 && score[4] == 2 && score[7] == 2 || score[2] == 2 && score[5] == 2 && score[8] == 2 || score[0] == 2 && score[4] == 2 && score[8] == 2 || score[2] == 2 && score[4] == 2 && score[6] == 2) {
            winner.innerHTML = "You lose!<i class=\"bi bi-emoji-frown-fill text-dark ms-1\"></i>";
            winner.classList.add("bg-danger");
            winner.style.color="white";
            gameScore[1]++;
            document.getElementById("winner").click();
            resetGame();
        } else if (!(score[0] == 0 || score[1] == 0 || score[2] == 0 || score[3] == 0 || score[4] == 0 || score[5] == 0 || score[6] == 0 || score[7] == 0 || score[8] == 0)) {
            winner.innerHTML = "It's DRAW";
            winner.style.color="black";
            winner.classList.add("bg-info");
            document.getElementById("winner").click();
            resetGame();
        }
        document.getElementById("player-score").innerHTML = gameScore[0];
        document.getElementById("computer-score").innerHTML = gameScore[1];
    }

    let icons = document.getElementsByClassName("col-4");

    for (var n=0;n<icons.length;n++) {
        let katak = icons[n];
        katak.id = n;
        katak.addEventListener("click", (e) => {
            if (!katak.childNodes[1].classList.contains("bi-x-lg") && !katak.childNodes[1].classList.contains("bi-circle")) {
                katak.childNodes[1].classList.add("bi-x-lg");
                score[katak.id] = 1;
                if (document.querySelectorAll(".modal-body")[0].classList.contains("bg-success"))
                    document.querySelectorAll(".modal-body")[0].classList.remove("bg-success");
                else if (document.querySelectorAll(".modal-body")[0].classList.contains("bg-danger"))
                    document.querySelectorAll(".modal-body")[0].classList.remove("bg-danger");
                else if (document.querySelectorAll(".modal-body")[0].classList.contains("bg-info"))
                    document.querySelectorAll(".modal-body")[0].classList.remove("bg-info");
                setTimeout(getWinner, 100);
                setTimeout(getComputerChoice, 101);
            }
        });
    }

    function newGame() {
        gameScore = [0, 0];
        document.getElementById("player-score").innerHTML = gameScore[0];
        document.getElementById("computer-score").innerHTML = gameScore[1];
        resetGame();
    }

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", newGame);

    document.body.onclick = (e) => {
        document.getElementById("reset").style.display = "block";
    }

    function getComputerChoice() {
        let katakchalar = document.getElementsByClassName("col-4");
        if (katakchalar[0].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[1].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[2])) {
                katakchalar[2].childNodes[1].classList.add("bi-circle");
                score[2] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[2].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[1])) {
                katakchalar[1].childNodes[1].classList.add("bi-circle");
                score[1] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[3].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[6])) {
                katakchalar[6].childNodes[1].classList.add("bi-circle");
                score[6] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[6].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[3])) {
                katakchalar[3].childNodes[1].classList.add("bi-circle");
                score[3] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[4].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[8])) {
                katakchalar[8].childNodes[1].classList.add("bi-circle");
                score[8] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[4])) {
                katakchalar[4].childNodes[1].classList.add("bi-circle");
                score[4] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[1].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[2].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[0])) {
                katakchalar[0].childNodes[1].classList.add("bi-circle");
                score[0] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[4].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[7])) {
                katakchalar[7].childNodes[1].classList.add("bi-circle");
                score[7] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[7].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[4])) {
                katakchalar[4].childNodes[1].classList.add("bi-circle");
                score[4] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[2].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[4].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[6])) {
                katakchalar[6].childNodes[1].classList.add("bi-circle");
                score[6] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[6].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[4])) {
                katakchalar[4].childNodes[1].classList.add("bi-circle");
                score[4] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[5].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[8])) {
                katakchalar[8].childNodes[1].classList.add("bi-circle");
                score[8] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[5])) {
                katakchalar[5].childNodes[1].classList.add("bi-circle");
                score[5] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[3].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[6].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[0])) {
                katakchalar[0].childNodes[1].classList.add("bi-circle");
                score[0] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[4].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[5])) {
                katakchalar[5].childNodes[1].classList.add("bi-circle");
                score[5] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[5].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[4])) {
                katakchalar[4].childNodes[1].classList.add("bi-circle");
                score[4] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[4].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[5].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[3])) {
                katakchalar[3].childNodes[1].classList.add("bi-circle");
                score[3] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[6].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[2])) {
                katakchalar[2].childNodes[1].classList.add("bi-circle");
                score[2] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[7].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[1])) {
                katakchalar[1].childNodes[1].classList.add("bi-circle");
                score[1] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[0])) {
                katakchalar[0].childNodes[1].classList.add("bi-circle");
                score[0] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[5].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[2])) {
                katakchalar[2].childNodes[1].classList.add("bi-circle");
                score[2] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[6].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[7].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[8])) {
                katakchalar[8].childNodes[1].classList.add("bi-circle");
                score[8] = 2;
                setTimeout(getWinner, 100);
            } else if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[7])) {
                katakchalar[7].childNodes[1].classList.add("bi-circle");
                score[7] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else if (katakchalar[7].childNodes[1].classList.contains("bi-x-lg")) {
            if (katakchalar[8].childNodes[1].classList.contains("bi-x-lg") && isEmpty(katakchalar[6])) {
                katakchalar[6].childNodes[1].classList.add("bi-circle");
                score[6] = 2;
                setTimeout(getWinner, 100);
            } else {
                getRandomChoice();
            }
        } else {
            getRandomChoice();
        }
    }

    function isEmpty(elem) {
        if (elem.childNodes[1].classList.contains("bi-x-lg") || elem.childNodes[1].classList.contains("bi-circle"))
            return false;
        else
            return true;
    }
});