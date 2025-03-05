// "Each little piece of functionality should be able to fit in the game, player or gameboard objects."

function createPlayer(name, symbol) {
    let playerName = name;
    const getName = () => playerName;
    const setName = (name) => { playerName = name; }
    const playerSymbol = symbol;
    const getSymbol = () => playerSymbol;
    return { getName, setName, getSymbol }
}

let PLAYER1 = createPlayer('player1', 'X');
let PLAYER2 = createPlayer('player2', 'O');

const GAME_OBJECT = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = PLAYER1;
    let winner = null;
    const getWinner = () => winner;
    const getCurrentPlayer = () => currentPlayer;
    let nextPlayer = PLAYER2;
    const getBoard = () => board;
    const alterBoard = (pos, symbol) => {
        board[pos] = symbol;
    }
    const resetGameObject = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        winner = null;
        currentPlayer = PLAYER1;
    }
    const alternatePlayers = () => {
        let temp = currentPlayer;
        currentPlayer = nextPlayer;
        nextPlayer = temp;
    }

    let isGameFinished = () => {
        let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]];
        // Look for a winner
        for (var i = 0; i < winConditions.length; i++) { // eg. i = [0,1,2]
            if (board[winConditions[i][0]] == board[winConditions[i][1]] && board[winConditions[i][1]] == board[winConditions[i][2]] && board[winConditions[i][2]] != "") {
                console.log("returning TRUE! isgamefinished", winConditions[i][0], " ", winConditions[i][1], " ", winConditions[i][2])
                winner = currentPlayer;
                return true;
            }
        }
        // look for a full board
        for (var i = 0; i < 9; i++) {
            if (board[i] == "") {
                // console.log("RETURNING FALSE, empy space in slot " + i);
                return false;
            }
        }
        console.log("RETURNING TRUE, all slots full ");
        return true;
    }

    return { isGameFinished, getBoard, alterBoard, getCurrentPlayer, alternatePlayers, getWinner, resetGameObject }
})();



const UIController = (function () {
    const initButtons = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.id != 'submit_button') { //apply to all except the form submission button
                button.addEventListener('click', buttonPress, button.id);
                button.innerHTML = "";
            }
        })
    }

    const initForm = () => {
        let form = document.getElementById('player_info');
        form.addEventListener('submit', formSubmit);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        const nameInput1 = document.getElementById("player1");
        const nameInput2 = document.getElementById("player2");
        let warning = document.getElementById('user_message');
        // verify both user inputs
        if (nameInput1.value != "" && nameInput2.value != "") {
            PLAYER1.setName(nameInput1.value);
            PLAYER2.setName(nameInput2.value);
            console.log("Player is now named ", PLAYER1.getName(), "player2 is ", PLAYER2.getName())
            //swap out the visible html elements
            hideForm();
            warning.style.display = 'none';
            revealBoard();
        }
        else {
            warning.style.display = 'inline';

        }
    }

    const alternateUserInstruction = () => {
        let msg = document.getElementById('user_instruction');
        let name = GAME_OBJECT.getCurrentPlayer().getName();
        let symbol = GAME_OBJECT.getCurrentPlayer().getSymbol();
        msg.innerHTML = name + "'s turn. Playing with symbol: " + symbol;
    }

    const buttonPress = (event) => {
        // if a valid play
        if (event.target.innerHTML == '') {
            let symbol = GAME_OBJECT.getCurrentPlayer().getSymbol();
            GAME_OBJECT.alterBoard(event.target.id, symbol);
            if (GAME_OBJECT.isGameFinished()) {
                finishGame();
                GAME_OBJECT.resetGameObject();
            }
            else {
                event.target.innerHTML = symbol;
                GAME_OBJECT.alternatePlayers();
                alternateUserInstruction();
            }

        }
        else {
            console.log("you cant do that!");
        }
    }

    const hideForm = () => {
        const formContainer = document.getElementById('form_container');
        formContainer.style.display = 'none';

    }
    const revealBoard = () => {
        const board = document.getElementById('game_container');
        board.style.display = 'flex';
        const h3 = document.getElementById('user_instruction');
        const name = PLAYER1.getName();
        h3.innerHTML = name + " starts, click a button!";
    }

    const finishGame = () => {
        const header = document.getElementById('user_instruction');
        if (GAME_OBJECT.getWinner() != null) {
            header.innerHTML = GAME_OBJECT.getWinner().getName() + " wins! Play again?";
        }
        else {
            header.innerHTML = "Game over! Play again?"
        }
        //reset all the board buttons
        initButtons();
        const formContainer = document.getElementById('form_container');
        formContainer.style.display = 'flex';
        const form = document.getElementById('player_info');
        form.reset();
        const board = document.getElementById('game_container');
        board.style.display = 'none';
    }

    initButtons()
    initForm()
    return { buttonPress, finishGame }
})();
