class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'circle';
        this.gameActive = true;
        this.circleScore = 0;
        this.crossScore = 0;
        this.drawScore = 0;
        this.winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        this.initializeGame();
    }

    initializeGame() {
        this.createBoard();
        this.attachEventListeners();
        this.updateTurnDisplay();
        this.loadScores();
    }

    createBoard() {
        const boardGrid = document.getElementById('board');
        boardGrid.innerHTML = '';
        
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.index = i;
            boardGrid.appendChild(cell);
        }
    }

    attachEventListeners() {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });

        document.getElementById('restartBtn').addEventListener('click', () => this.resetGame());
        document.getElementById('resetScoreBtn').addEventListener('click', () => this.resetScore());
        document.getElementById('modalCloseBtn').addEventListener('click', () => {
            document.getElementById('winModal').classList.remove('show');
            this.resetGame();
        });
    }

    handleCellClick(e) {
        const cell = e.target;
        const index = parseInt(cell.dataset.index);

        if (!this.gameActive || this.board[index] !== null) return;

        // Make move
        this.board[index] = this.currentPlayer;
        cell.classList.add(this.currentPlayer);
        cell.innerHTML = this.currentPlayer === 'circle' ? 
            '<i class="fas fa-circle"></i>' : 
            '<i class="fas fa-times"></i>';

        // Check win
        const winInfo = this.checkWin();
        if (winInfo.winner) {
            this.handleWin(winInfo);
        } else if (this.board.every(cell => cell !== null)) {
            this.handleDraw();
        } else {
            // Switch player
            this.currentPlayer = this.currentPlayer === 'circle' ? 'cross' : 'circle';
            this.updateTurnDisplay();
        }
    }

    checkWin() {
        for (const combo of this.winningCombos) {
            const [a, b, c] = combo;
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                return {
                    winner: this.board[a],
                    combo: combo
                };
            }
        }
        return { winner: null };
    }

    handleWin(winInfo) {
        this.gameActive = false;
        
        // Highlight winning cells
        winInfo.combo.forEach(index => {
            document.querySelector(`[data-index="${index}"]`).classList.add('win');
        });

        // Update score
        if (winInfo.winner === 'circle') {
            this.circleScore++;
            this.showWinModal('Circle Wins! 🎉');
        } else {
            this.crossScore++;
            this.showWinModal('Cross Wins! 🎉');
        }

        this.updateScore();
        this.saveScores();
    }

    handleDraw() {
        this.gameActive = false;
        this.drawScore++;
        this.showWinModal("It's a Draw! 🤝");
        this.updateScore();
        this.saveScores();
    }

    showWinModal(message) {
        const modal = document.getElementById('winModal');
        const modalMessage = document.getElementById('modalMessage');
        modalMessage.textContent = message;
        modal.classList.add('show');
    }

    resetGame() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'circle';
        this.gameActive = true;

        // Clear cells
        document.querySelectorAll('.cell').forEach(cell => {
            cell.className = 'cell';
            cell.innerHTML = '';
        });

        this.updateTurnDisplay();
    }

    resetScore() {
        if (confirm('Are you sure you want to reset all scores?')) {
            this.circleScore = 0;
            this.crossScore = 0;
            this.drawScore = 0;
            this.updateScore();
            this.saveScores();
            this.resetGame();
        }
    }

    updateTurnDisplay() {
        const turnIcon = document.getElementById('turnIcon');
        const turnName = document.getElementById('turnName');
        
        if (this.currentPlayer === 'circle') {
            turnIcon.className = 'turn-icon circle-turn';
            turnIcon.innerHTML = '<i class="fas fa-circle"></i>';
            turnName.textContent = 'Circle';
        } else {
            turnIcon.className = 'turn-icon cross-turn';
            turnIcon.innerHTML = '<i class="fas fa-times"></i>';
            turnName.textContent = 'Cross';
        }
    }

    updateScore() {
        document.getElementById('circleScore').textContent = this.circleScore;
        document.getElementById('crossScore').textContent = this.crossScore;
        document.getElementById('drawScore').textContent = this.drawScore;
    }

    saveScores() {
        localStorage.setItem('ticTacToeScores', JSON.stringify({
            circle: this.circleScore,
            cross: this.crossScore,
            draw: this.drawScore
        }));
    }

    loadScores() {
        const saved = localStorage.getItem('ticTacToeScores');
        if (saved) {
            const scores = JSON.parse(saved);
            this.circleScore = scores.circle || 0;
            this.crossScore = scores.cross || 0;
            this.drawScore = scores.draw || 0;
            this.updateScore();
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});
