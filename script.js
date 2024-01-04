let user;
let userScore=0;
let opponent;
let opponentScore=0   ;

let choices =["rock", "paper", "scissors"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener('click', selectChoice)
        document.getElementById("choices").append(choice);
    }
}

function selectChoice(){
    user=this.id;
    document.getElementById("user-choice").src= user+".png"

    opponent=choices[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src= opponent+".png"

    if (user == opponent) {
        userScore += 1;
        opponentScore += 1;
    }
    else {
        if (user == "rock") {
            if (opponent == "scissors") {
                userScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (user == "scissors") {
            if (opponent == "paper") {
                userScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (user == "paper") {
            if (opponent == "rock") {
                userScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("opponent-score").innerHTML = opponentScore;
}
