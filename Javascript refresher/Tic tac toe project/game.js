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
    let currentPlayer = PLAYER1;
    let nextPlayer = PLAYER2;
    let board = ["", "", "", "", "", "", "", "", ""];
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


    let isGameFinished = () => {
        // TODO: put in more than one win condition lol
        if (board[0] == board[1] && board[1] == board[2] && board[2] != "") {
            console.log(board[0], board[1], board[2])
            console.log("returning true")
            return true;
        }
        console.log("returning false")
        return false;
    }
    return { isGameFinished, getBoard, alterBoard }
})();



const UIController = (function () {
    const initButtons = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.id != 'submit_button') { //ignore the form submission button
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
        const name1 = document.getElementById("player1");
        const name2 = document.getElementById("player2");
        // verify user inputs
        if (name1.value != "" && name2.value != "") {
            PLAYER1.setName(name1.value);
            PLAYER2.setName(name2.value);
            console.log("Player is now named ", PLAYER1.getName(), "player2 is ", PLAYER2.getName())
            hideForm();
            revealBoard();
        }
        else {
            let warning = document.getElementById('user_message')
            warning.style.display = 'inline';

        }
    }

    const buttonPress = (event) => {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = PLAYER1.getSymbol();
            GAME_OBJECT.alterBoard(event.target.id, PLAYER.getSymbol())
            let temp = nextPlayer;
            GAME_OBJECT.nextPlayer = currentPlayer;
            GAME_OBJECT.currentPlayer = temp;
        }
        else {
            console.log("you cant do that!");
        }
    }

    const computerTurn = (pos) => {
        let button = document.getElementById(pos);
        console.log("pos is", pos)
        console.log("computer is ", GAME_OBJECT.getSymbol())
        button.innerHTML = GAME_OBJECT.getSymbol();
    }

    const hideForm = () => {
        const formContainer = document.getElementById('form_container');
        formContainer.style.display = 'none';

    }
    const revealBoard = () => {
        const board = document.getElementById('game_container');
        board.style.display = 'flex';
        const h3 = document.getElementById('user_instruction');
        h3.innerHTML = "Click a button to start";
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
    return { buttonPress, finishGame, computerTurn }
})();
