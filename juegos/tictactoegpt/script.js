let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (board.indexOf('') === -1) {
            alert('It\'s a tie!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        if (board[combination[0]] === currentPlayer && board[combination[1]] === currentPlayer && board[combination[2]] === currentPlayer) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}

// Función para cambiar el estilo de fondo si el dispositivo es Android
function changeBackground() {
    if (isAndroid()) {
      document.body.style.background = 'url(imagemobile.jpg)'; // Cambia el fondo a la imagen "background-android.jpg" si es Android
      document.body.style.backgroundSize = 'cover'; // Ajusta la imagen al tamaño del cuerpo
    }
  }

  // Llama a la función changeBackground cuando la página se cargue
  window.onload = changeBackground;
