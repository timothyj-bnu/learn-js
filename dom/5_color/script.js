document.body.style.transition = "background-color 0.1s";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";

const changeColorButton = document.querySelector('#changeColorButton');

// changeColorButton.addEventListener('click', function() {
//     document.body.classList.toggle('light-blue');
// });

const newButton = document.createElement('button');
const newButtonText = document.createTextNode('Change color random');

newButton.appendChild(newButtonText);
newButton.setAttribute('id', 'changeColorButton');
newButton.setAttribute('type', 'button');
newButton.addEventListener('click', function() {

    let event = new Event('input');

    redSlider.value = getRandomRGBValue();
    greenSlider.value = getRandomRGBValue();
    blueSlider.value = getRandomRGBValue();

    redSlider.dispatchEvent(event);
    greenSlider.dispatchEvent(event);
    blueSlider.dispatchEvent(event);
});

function getRandomRGBValue(){
    return Math.floor(Math.random() * 256);
}

changeColorButton.after(newButton);

const redSlider = document.querySelector('input[name="redSlider"]');
const greenSlider = document.querySelector('input[name="greenSlider"]');
const blueSlider = document.querySelector('input[name="blueSlider"]');

const rgbValue = document.createElement('div');
const rgbValueText = document.createTextNode('RGB value: ');
rgbValue.appendChild(rgbValueText);
rgbValue.setAttribute('id', 'rgbValue');

const rangeSliderArea = document.querySelector('#rangeSliderArea');
rangeSliderArea.after(rgbValue);

redSlider.addEventListener('input', function() {
    document.body.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    rgbValue.innerText = `RGB value: ${redSlider.value}, ${greenSlider.value}, ${blueSlider.value}`;
});

greenSlider.addEventListener('input', function() {
    document.body.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    rgbValue.innerText = `RGB value: ${redSlider.value}, ${greenSlider.value}, ${blueSlider.value}`;
});

blueSlider.addEventListener('input', function() {
    document.body.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    rgbValue.innerText = `RGB value: ${redSlider.value}, ${greenSlider.value}, ${blueSlider.value}`;
});

const cursorPositionValue = document.createElement('div');
const cursorPositionValueText = document.createTextNode('Mouse position: ');
cursorPositionValue.appendChild(cursorPositionValueText);
cursorPositionValue.setAttribute('id', 'cursorPositionValue');

rgbValue.after(cursorPositionValue);

document.addEventListener('mousemove', function(event){
    const xPos = Math.round(event.clientX / window.innerWidth * 255);
    const yPos = Math.round(event.clientY / window.innerHeight * 255);

    cursorPositionValue.innerText = `Mouse position: ${xPos}, ${yPos}`;
});