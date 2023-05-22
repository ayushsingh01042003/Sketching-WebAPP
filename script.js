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

let currentColor = colorPicker.value;
let currentSize = sliderValue.value;
let isMousePressed = false;

const colorMode = () => {
    colorBtn.style.backgroundColor = '#dfb3b0c4';
    clearBtn.style.backgroundColor = '';
    eraseBtn.style.backgroundColor = '';
    loadGrid();
    startColoring();
}

const loadGrid = () => {
    const gridSize = currentSize;
    const gridWidth = grid.clientWidth;
    const gridHeight = grid.clientHeight;
    
    // Calculate the cell size based on the available space and grid size
    const cellWidth = gridWidth / gridSize;
    const cellHeight = gridHeight / gridSize;

    // to get the existing cells
    const cells = Array.from(grid.getElementsByClassName('grid-cell'));
    
    // Set CSS grid properties to adjust columns and rows based on cell size
    grid.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0, ${cellWidth}px))`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, minmax(0, ${cellHeight}px))`;
    
    // Create grid cells and append them to the grid container
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        // cell.style.border = '1px solid blue';
        grid.appendChild(cell);
    }
};

const startColoring = () => {

    currentColor = colorPicker.value;
    currentSize = sliderValue.value;

    grid.addEventListener('mousedown', () => {
        isMousePressed = true;
    });

    grid.addEventListener('mouseup', () => {
        isMousePressed = false;
    });

    grid.addEventListener('mousemove', (event) => {
        if (isMousePressed) {
            const hoveredElement = event.target;
            if (hoveredElement.classList.contains('grid-cell')) {
                hoveredElement.style.backgroundColor = currentColor;
            }
        }
    });

    grid.addEventListener('click', (event) => {
        // Get a reference to the clicked element
        const clickedElement = event.target;

        // Check if the clicked element is a grid cell
        if (clickedElement.classList.contains('grid-cell')) {
            // Set the background color of the cell to the current color
            clickedElement.style.backgroundColor = currentColor;
        }
    });
}

const eraseMode = () => {
    eraseBtn.style.backgroundColor = '#dfb3b0c4';
    colorBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';

    grid.addEventListener('mousedown', () => {
        isMousePressed = true;
    });

    grid.addEventListener('mouseup', () => {
        isMousePressed = false;
    });

    grid.addEventListener('mousemove', (event) => {
        if (isMousePressed) {
            const hoveredElement = event.target;
            if (hoveredElement.classList.contains('grid-cell')) {
                hoveredElement.style.backgroundColor = `white`;
            }
        }
    });

    grid.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('grid-cell')) {
            clickedElement.style.backgroundColor = `white`;
        }
    });

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
    currentSize = sliderValue.value;
    loadGrid();
});

colorPicker.addEventListener(`input`, () => {
    currentColor = colorPicker.value;
})

colorBtn.addEventListener(`click`, colorMode);
eraseBtn.addEventListener(`click`, eraseMode);

const defaultMode = () => {
    let currentColor = DEFAULT_COLOR;
    let currentSize = DEFAULT_SIZE;
    colorMode();
}

window.onload = () => {
    defaultMode();
}