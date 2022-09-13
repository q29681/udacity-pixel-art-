// Select color input
let pickacolor = document.getElementById('colorPicker');

// Select size input
let pixelCanvas = document.getElementById('pixelCanvas');
let width = document.getElementById('inputWidth');
let height = document.getElementById('inputHeight');

// When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function (event) {
    makeGrid(height.value, width.value);
    event.preventDefault();
});

function makeGrid(height, width) {
    let table = document.createElement('table')
    for (var w = 0; w < height; w++) {
        const row = table.insertRow();
        for (var h = 0; h < width; h++) {
            row.insertCell();
        }
    }

    table.addEventListener('click', ev => {
        if (ev.target instanceof HTMLTableCellElement) {
            const color = pickacolor.value;
            ev.target.style.backgroundColor = color;
        }
    });

    pixelCanvas.replaceChildren(table);
}
