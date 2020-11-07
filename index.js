const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const stopBtnRef = document.querySelector("[data-action='stop']");
const startBtnRef = document.querySelector("[data-action='start']");
const bodyRef = document.querySelector('body');
let colorPickerId;
let isColorChange = false;

startBtnRef.addEventListener('click', changeBodycolor)
stopBtnRef.addEventListener('click', stopChangeBodycolor)

function changeBodycolor() {
    if (isColorChange === true) { 
        return;
    }
    colorPickerId = setInterval(setRandomColor, 1000)
    isColorChange = true;
    function setRandomColor() {
        bodyRef.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length)]}`;
    }
}

function stopChangeBodycolor() {
    clearInterval(colorPickerId);
        isColorChange = false;
}
