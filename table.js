class Table {

    #chosenNumbers = [];
    constructor() {
        this.board = document.getElementById('board');
    }

    createBoard() {
        this.board.innerHTML = "";

        let number = 1;
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 15; j++) {
                const cell = document.createElement('td');
                cell.id = `cell-${number}`;
                cell.textContent = number;
                cell.classList.add("chosen-number-cell");
                number++;
                row.appendChild(cell);
            }
            this.board.appendChild(row);
        }
    }

    paintChosenNumber(number) {
        const cell = document.getElementById(`cell-${number}`);
        cell.style.backgroundColor = "#10B981";
    }
}

export default Table;