const DEFAULT_COLOR = '#333333'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const sliderText = document.getElementById("sliderText");
const sliderValue = document.getElementById("sliderValue");
const colorBtn = document.getElementById('colorButton');
const eraseBtn = document.getElementById("eraseButton");
const clearBtn = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementById('grid');

function defaultMode() {
    currentColor = DEFAULT_COLOR;
    currentSize = DEFAULT_SIZE;
    colorBtn.click();
}

colorBtn.addEventListener("click", () => {
    colorBtn.style.backgroundColor = '#aba3d7';
    eraseBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';

    // code for coloring the grid
    currentColor = colorPicker.value;
    currentSize = sliderValue.value;

    grid.addEventListener("mousedown", drawPixel);
});

eraseBtn.addEventListener("click", () => {
    eraseBtn.style.backgroundColor = '#aba3d7';
    colorBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';
    
    // remove drawing listener and add erase listener
    grid.removeEventListener("mousedown", drawPixel);
    grid.addEventListener("mousedown", erasePixel);
});

sliderValue.addEventListener("input", () => {
    sliderText.innerHTML = `${sliderValue.value} X ${sliderValue.value}`;
});

clearBtn.addEventListener("click", () => {
    clearBtn.style.backgroundColor = '#aba3d7';
    colorBtn.style.backgroundColor = '';
    eraseBtn.style.backgroundColor = '';
    
    // remove drawing listener and add clear listener
    grid.removeEventListener("mousedown", drawPixel);
    grid.addEventListener("mousedown", clearPixel);
    grid.innerHTML = '';
});

  
function erasePixel(event) {
    if (event.target !== grid) {
        event.target.remove();
    }
}

function clearPixel(event) {
    grid.innerHTML = '';
}

window.onload = () => {
    defaultMode();
}
