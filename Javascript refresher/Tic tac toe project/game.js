// "Each little piece of functionality should be able to fit in the game, player or gameboard objects."

function createPlayer (name, symbol) {
    let playerName = name;
    const getName = () => playerName;
    const setName = (name) => {playerName = name;}
    const playerSymbol = symbol;
    const getSymbol = () => playerSymbol;
    return { getName, setName, getSymbol }
}

let PLAYER1 = createPlayer('player1', 'X');
let PLAYER2 = createPlayer('player2', 'O');

const GAME_OBJECT = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = PLAYER1;
    const getCurrentPlayer = () => currentPlayer;
    let nextPlayer = PLAYER2;
    const getBoard = () => board;
    const alterBoard = (pos, symbol) => {
        board[pos] = symbol;
        if (isGameFinished()) {
            //reset board
            board = ["", "", "", "", "", "", "", "", ""];
            // reset css/html to play again
            UIController.finishGame();
        }
    }
    const alternatePlayers = () => {
        let temp = currentPlayer;
        currentPlayer = nextPlayer;
        nextPlayer = temp;
    }

    let isGameFinished = () => {
        // possible end conditions: the board is full (lose-lose), somebody won the game (win-lose)
        // TODO: put in more than one win condition lol
        if (board[0] == board[1] && board[1] == board[2] && board[2] != "") {
            console.log(board[0], board[1], board[2])
            console.log("returning true isgamefinished")
            return true;
        }
        console.log("returning false isgamefinished")
        return false;
    }
    return { isGameFinished, getBoard, alterBoard, getCurrentPlayer, alternatePlayers }
})();



const UIController = (function () {
    const initButtons = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.id != 'submit_button') { //apply to all except the form submission button
                button.addEventListener('click', buttonPress, button.id);
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
        // verify user inputs
        if (nameInput1.value != "" && nameInput2.value != "") {
            PLAYER1.setName(nameInput1.value);
            PLAYER2.setName(nameInput2.value);
            console.log("Player is now named ", PLAYER1.getName(), "player2 is ", PLAYER2.getName())
            hideForm();
            revealBoard();
        }
        else {
            let warning = document.getElementById('user_message')
            warning.style.display = 'inline';

        }
    }

    const alternateUserInstruction = () => {
        console.log("alternate instruction function is called")
        let msg = document.getElementById('user_instruction');
        let name = GAME_OBJECT.getCurrentPlayer().getName();
        msg.innerHTML = name + "'s turn!..";
    }

    const buttonPress = (event) => {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = GAME_OBJECT.getCurrentPlayer().getSymbol();
            console.log("in button press: current player and symbol are: " + GAME_OBJECT.getCurrentPlayer().getName() + GAME_OBJECT.getCurrentPlayer().getSymbol())
            alternateUserInstruction();
            GAME_OBJECT.alternatePlayers();
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
        header.innerHTML = "Game over! Play again?"
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
