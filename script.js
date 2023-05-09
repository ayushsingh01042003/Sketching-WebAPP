const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

const sliderText = document.getElementById("sliderText");
const sliderValue = document.getElementById("sliderValue");
const colorBtn = document.getElementById('colorButton');
const eraseBtn = document.getElementById("eraseButton");
const clearBtn = document.getElementById("clearButton");
const colorPicker = document.getElementById("colorPicker");

sliderValue.addEventListener("input", () => {
    sliderText.innerHTML = `${sliderValue.value} X ${sliderValue.value}`;
});

colorBtn.addEventListener("click", () => {
    colorBtn.style.backgroundColor = '#aba3d7';
    eraseBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';

    //functionality of the color button
    //first get the current color seleted in the color selector
    //then get the current size from the slider 
    //when the mouse is moved on the drawing grid and clicked anywhere on it 
    //A pixes of the color and size should be made on it
});

eraseBtn.addEventListener("click", () => {
    eraseBtn.style.backgroundColor = '#aba3d7';
    colorBtn.style.backgroundColor = '';
    clearBtn.style.backgroundColor = '';
});

clearBtn.addEventListener("click", () => {
    clearBtn.style.backgroundColor = '#aba3d7';
    colorBtn.style.backgroundColor = '';
    eraseBtn.style.backgroundColor = '';
});
