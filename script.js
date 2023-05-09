const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

const sliderText = document.getElementById("sliderText");
const sliderValue = document.getElementById("sliderValue");
const colorBtn = document.getElementById('colorButton');
const eraseBtn = document.getElementById("eraseButton");
const clearBtn = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");
const grid = document.getElementsByClassName("grid");

sliderValue.addEventListener("input", () => {
    sliderText.innerHTML = `${sliderValue.value} X ${sliderValue.value}`;
});


function setButtonActive(button, otherButton1, otherButton2) {
    button.style.backgroundColor = '#aba3d7';
    otherButton1.style.backgroundColor = '';
    otherButton2.style.backgroundColor = '';
}

function colorMode() {
    colorBtn.addEventListener("click", () => {
        setButtonActive(colorBtn, eraseBtn, clearBtn);
    });
}

function eraseMode() {
    eraseBtn.addEventListener("click", () => {
        setButtonActive(eraseBtn, colorBtn, clearBtn);
    });
}

function clear() {
    clearBtn.addEventListener("click", () => {
        setButtonActive(clearBtn, colorBtn, eraseBtn);
        // clear the grid
    });
}
