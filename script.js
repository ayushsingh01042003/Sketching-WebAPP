const sliderText = document.getElementById("sliderText");
const sliderValue = document.getElementById("sliderValue");
const colorBtn = document.getElementById('colorButton');
const eraseBtn = document.getElementById("eraseButton");
const clearBtn = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementById('grid');
const canvas = document.querySelector(`canvas`);

const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const colorMode = () => {
    colorBtn.style.backgroundColor = '#dfb3b0c4';
    clearBtn.style.backgroundColor = '';
    eraseBtn.style.backgroundColor = '';

    //code for coloring on the blank space
    //1. Load the grid
    loadGrid();
    //2. Call the coloring function
    startColoring();

}

const loadGrid = () => {
    const gridSize = currentSize;
    const cellWidth = grid.clientWidth / gridSize;
    const cellHeight = grid.clientHeight / gridSize;

    // Clear the existing grid
    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${cellWidth}px)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${cellHeight}px)`;
    
    // Create grid cells and append them to the grid container
    for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellHeight}px`;
            cell.style.border = '1px solid blue';
            grid.appendChild(cell);
    }
}


const startColoring = () => {
    currentColor = colorPicker.value;
    currentSize = sliderValue.value;
    

}

const eraseMode = () => {
    eraseBtn.style.backgroundColor = '#dfb3b0c4';
    colorBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';

}

clearBtn.addEventListener("click", () => {
    clearBtn.style.backgroundColor = '#dfb3b0c4';
    colorBtn.style.backgroundColor = '';
    eraseBtn.style.backgroundColor = '';

    //clear the coloring area
    grid.innerHTML = '';
})

sliderValue.addEventListener('input', () => {
    sliderText.textContent = `${sliderValue.value} X ${sliderValue.value}`;
});

colorBtn.addEventListener(`click`, colorMode);
eraseBtn.addEventListener(`click`, eraseMode);
