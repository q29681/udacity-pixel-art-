// Select color input
let pickacolor = document.getElementById('colorPicker');

// Select size input
let pixelCanvas = document.getElementById('pixelCanvas');
let width = document.getElementById('inputWidth');
let height = document.getElementById('inputHeight');

// When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function(event) {
    makeGrid(height.value, width.value);
    event.preventDefault();
});

function makeGrid(height, width) {
    const color = pickacolor.value;
    let table = document.createElement('table')
        for (var w=0; w<width; w++){
            const row = table.insertRow();
            for (var h=0; h<height; h++){
                const cell = row.insertCell();
                cell.addEventListener('click', function(event){
                    cell.style.backgroundColor =color;
                });
        }
    }
    pixelCanvas.replaceChildren(table);
// Your code goes here!
}