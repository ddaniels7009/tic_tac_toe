

// CREATE A GAME, PLAYER, AND GAMEBOARD OBJECT

// STORE THE GAMEBOARD INSIDE AN ARRAY INSIDE OF A GAMEBOARD OBJECT --- USE A MODULE
const board = (function () {
body = document.body;
let rows = document.getElementsByClassName('rows');
let textContainer = document.getElementsByClassName('textContainer');


// Remove if not working
let turn = 0;


let gameBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];


const createBoard = function () {

    let title = document.createElement('div');
    title.setAttribute('id', "title");
    title.innerText = "Tic Tac Toe"
    body.appendChild(title);

    // Create 3 rows
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');
        body.appendChild(row);
        row.classList.add('rows')
        row.setAttribute('id', i + 1);
    }

    // Create 9 squares and append them to the rows
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 3; j++) {
            square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', gameBoard[i][j]);

            let textContainer = document.createElement('p');
            textContainer.classList.add('textContainer');
            textContainer.innerText = "";
            textContainer.addEventListener('click', function(){ placeMarker(textContainer); game.checkForWin(); })
            square.appendChild(textContainer);

            rows[j].appendChild(square);
            gameBoard[i][j] = square;
        }
    }

    // Create results panel DOM elements
    const resultsPanel = document.createElement('div');
    resultsPanel.classList.add('results');
    body.appendChild(resultsPanel);

    const resultsTextBox = document.createElement('div');
    resultsTextBox.setAttribute('id', 'resultsTextBox');
    resultsTextBox.innerText = "X Makes First Move";
    resultsPanel.appendChild(resultsTextBox);

    // Create reset button DOM elements
    let resetButton = document.createElement('button');
    resetButton.innerText = "New Game"
    resultsPanel.appendChild(resetButton);
    resetButton.addEventListener('click', function () { deleteBoard() })

}

//Create initial board
createBoard();

// Delete the board contents to start a new game.
const deleteBoard = function () {

    for (let i = 0; i < 9; i++) {
        textContainer[i].innerText = "";
    }
    resultsTextBox.innerText = "";
    turn = 0;

}

// Must call this function for it to execute
const placeMarker = function (e) {

    if(e.innerText == "" && (turn % 2 == 0) && game.checkForWin() != "game over"){
    e.innerText = "X";
    turn++;
    }
    else if(e.innerText == "" && (turn % 2 !=0) && game.checkForWin() != "game over"){
        e.innerText = "O";
        turn++;
    }



}

// Call initial placemarker
placeMarker("X");

return { placeMarker, createBoard, textContainer, resultsTextBox };


})();

//board.resultsTextBox.innerText = "ggg"////////////////////////////////////


// CREATE PLAYER OBJECT USING A FACTORY --- SINCE YOU HAVE MORE THAN ONE OF THEM
// Literally only need to store the player's name's
const player = (name, gamePiece) => {

// Name and game piece getters
const getName = () => name;


return { getName }
}

// Create player objects
const player1 = player('John');
const player2 = player('Alison');



// CREATE AN OBJECT TO CONTROL THE FLOW OF THE GAME --- USE A MODULE SINCE YOU ONLY HAVE ONE OF THEM
const game = (function () {


const checkForWin = function () {

    //*** Check X's ***

    // Checks for horizontal win
    if (board.textContainer[0].innerText == "X" && board.textContainer[1].innerText == "X" && board.textContainer[2].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over"

    }
    else if (board.textContainer[3].innerText == "X" && board.textContainer[4].innerText == "X" && board.textContainer[5].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";
    }
    else if (board.textContainer[6].innerText == "X" && board.textContainer[7].innerText == "X" && board.textContainer[8].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";
    }
    // Check for diagonal win
    else if (board.textContainer[0].innerText == "X" && board.textContainer[4].innerText == "X" && board.textContainer[8].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";
    }
    else if (board.textContainer[2].innerText == "X" && board.textContainer[4].innerText == "X" && board.textContainer[6].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";
    }
    // Check for vertical win
    else if (board.textContainer[0].innerText == "X" && board.textContainer[3].innerText == "X" && board.textContainer[6].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";

    }
    else if (board.textContainer[1].innerText == "X" && board.textContainer[4].innerText == "X" && board.textContainer[7].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";
    }
    else if (board.textContainer[2].innerText == "X" && board.textContainer[5].innerText == "X" && board.textContainer[8].innerText == "X") {
        board.resultsTextBox.innerText = "Game over. X wins";
        return "game over";

    }

    //*** Check O's ***

    // Checks for horizontal win
    else if (board.textContainer[0].innerText == "O" && board.textContainer[1].innerText == "O" && board.textContainer[2].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else if (board.textContainer[3].innerText == "O" && board.textContainer[4].innerText == "O" && board.textContainer[5].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else if (board.textContainer[6].innerText == "O" && board.textContainer[7].innerText == "O" && board.textContainer[8].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    // Check for diagonal win
    else if (board.textContainer[0].innerText == "O" && board.textContainer[4].innerText == "O" && board.textContainer[8].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else if (board.textContainer[2].innerText == "O" && board.textContainer[4].innerText == "O" && board.textContainer[6].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    // Check for vertical win
    else if (board.textContainer[0].innerText == "O" && board.textContainer[3].innerText == "O" && board.textContainer[6].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else if (board.textContainer[1].innerText == "O" && board.textContainer[4].innerText == "O" && board.textContainer[7].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else if (board.textContainer[2].innerText == "O" && board.textContainer[5].innerText == "O" && board.textContainer[8].innerText == "O") {
        board.resultsTextBox.innerText = "Game over. O wins";
        return "game over";

    }
    else {
        board.resultsTextBox.innerText = "";
        return "";
    }


}

return { checkForWin };

})();