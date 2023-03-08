//ETCH A SKETCH
const container = document.querySelector('.container');
const input = document.querySelector('#gridNumber');

//RESET ACTION
const buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid()
});

// CREATE INITIAL GRID
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        container.appendChild(gridBox);
    };
    container.style.setProperty("grid-template-columns", "repeat(16, 1fr)");
    container.style.setProperty("grid-template-rows", "repeat(16, 1fr)");

    const sketch = document.querySelectorAll('.gridBox');
    sketch.forEach(square => {
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'pink'
        })
    });
}
createGrid();

//CREATE NEW GRID
const newGrid = () => {
    container.innerHTML = "";
    for (let i = 0; i < input.value * input.value; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        container.style.setProperty("grid-template-columns", `repeat(${input.value}, 1fr)`);
        container.style.setProperty("grid-template-rows", `repeat(${input.value}, 1fr)`);
        container.appendChild(gridBox);
    };
    const sketch = document.querySelectorAll('.gridBox');
    sketch.forEach(square => {
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'pink'
        })
    });
}

//NEW GRID BUTTON
const buttonSubmit = document.querySelector('#submit');
buttonSubmit.addEventListener('click', newGrid);