
body = document.body;

// CREATE A GAME, PLAYER, AND GAMEBOARD OBJECT


// STORE THE GAMEBOARD INSIDE AN ARRAY INSIDE OF A GAMEBOARD OBJECT --- USE A MODULE SINCE YOU ONLY HAVE ONE OF THEM
const board = (function () {

    let rows = document.getElementsByClassName('rows');
    let squares = document.getElementsByClassName('square');
    let textContainer = document.getElementsByClassName('textContainer');
    let resultsPanel = document.getElementsByClassName('results');

    let gameBoard = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];


    const createBoard = function () {


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
        resultsTextBox.innerText = "jj";
        resultsPanel.appendChild(resultsTextBox);

        // Create reset button DOM elements
        let resetButton = document.createElement('button');
        resetButton.innerText = "New Game"
        resultsPanel.appendChild(resetButton);
        resetButton.addEventListener('click', function () { deleteBoard(); createBoard(); placeMarker("X");})

    }

    //Create initial board
    createBoard();

    // Delete the board at the end of the game.
    const deleteBoard = function () {

        for (let i = 1; i < 4; i++) {
            body.removeChild(document.getElementById(i));
        }
        body.removeChild(resultsPanel[0]);

    }

    // Must call this function for it to execute
    const placeMarker = function (e) {

        for (let i = 0; i < 9; i++) {

            if (e == "X") {

                if ((textContainer[i].innerText == "X" || textContainer[i].innerText == "O")) {

                }
                else {
                    textContainer[i].addEventListener('click', function () { textContainer[i].innerText = e; placeMarker("O"); game.checkForWin() });
                }
            }
            else if (e == "O") {

                if ((textContainer[i].innerText == "X" || textContainer[i].innerText == "O")) {

                }

                else {
                    textContainer[i].addEventListener('click', function () { textContainer[i].innerText = e; placeMarker("X"); game.checkForWin() });
                }
            }
        }
    }

    // Call initial placemarker
    placeMarker("X");

    return { gameBoard, placeMarker, textContainer, createBoard, resultsPanel, resultsTextBox };


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
            return "";
        }


    }



    return { checkForWin };

})();











//**Factories are simply plain old JavaScript functions that return objects for us to use in our code. 

// THIS IS A FACTORY FUNCTION --- USED ID YOU NEED MULTIPLES OF THINGS SUCH AS PLAYERS

/* const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };

  const counter = counterCreator();

  counter(); // 0
  counter(); // 1
  counter(); // 2
  counter(); // 3 */


// THIS IS A MODULE --- USED WHEN YOU ONLY NEED ONE OF A CERTAIN THING SUCH AS A GAMEBOARD OR DISPLAY CONTROLLER

/* const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

  calculator.add(3,5) // 8
  calculator.sub(6,2) // 4
  calculator.mul(14,5534) // 77476 */


// Factory function example
/*   const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };

  const taco = FactoryFunction('taco');

  printString(); // ERROR!!
  capitalizeString(); // ERROR!!
  taco.capitalizeString(); // ERROR!!
  taco.printString(); // this prints "----TACO----" */




/*   const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName}
  };

  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy); */