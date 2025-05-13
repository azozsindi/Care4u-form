const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
const status = document.getElementById('status');
const restartButton = document.getElementById('restartButton');
const X_CLASS = 'X';
const O_CLASS = 'O';
let xIsNext = true;

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    xIsNext = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove(X_CLASS, O_CLASS, 'winning-cell');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    updateStatus();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = xIsNext ? X_CLASS : O_CLASS;
    
    // Place Mark
    placeMark(cell, currentClass);
    
    // Check For Win
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        // Switch Turns
        xIsNext = !xIsNext;
        updateStatus();
    }
}

function placeMark(cell, currentClass) {
    cell.textContent = currentClass;
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        const isWinning = combination.every(index => {
            return cells[index].textContent === currentClass;
        });
        if (isWinning) {
            combination.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
        }
        return isWinning;
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.textContent === X_CLASS || cell.textContent === O_CLASS;
    });
}

function endGame(draw) {
    if (draw) {
        status.textContent = 'تعادل!';
    } else {
        status.textContent = `الفائز هو ${xIsNext ? 'X' : 'O'}!`;
    }
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

function updateStatus() {
    status.textContent = `دور اللاعب ${xIsNext ? 'X' : 'O'}`;
} 