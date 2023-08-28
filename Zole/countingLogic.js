/*
Logic for "Lielais"! 
If Player1 choses "Lielais", first confirm if Player1 truly wants to make this choice.
If Player1 confirms this choice, next confirmation is Player1 won or lost.
If Player1 won = Player1Score +3(rest of playerScores gets -1 each)/ lost = -6(rest of playersScores get +2 each). 
*/

function lielaisP1Won(){
        player1Score = player1Score + 3;
        player2Score = player2Score -1;
        player3Score = player3Score -1;
        player4Score = player4Score -1;
}

function lielaisP1Lost(){
    player1Score = player1Score - 6;
    player2Score = player2Score + 2;
    player3Score = player3Score + 2;
    player4Score = player4Score + 2;
}

function lielaisP1WonOrLost() {
    let lielaisP1WonResultCall;
    let lielaisP1WonResult = confirm("Lielais uzvarēja?");
    if (lielaisP1WonResult == true) {
        lielaisP1Won();
    } else {
        lielaisP1Lost();
    }
}

function lielaisP1() {
    confirm(lielaisP1WonOrLost());
}