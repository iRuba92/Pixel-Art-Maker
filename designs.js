// Get HTML Elements

const color = document.getElementById('colorPicker'); // Select color input

const row = document.getElementById('inputHeight').value; // Select size input
const column = document.getElementById('inputWidth').value;

const canvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');


// When width and height is submitted by the user, call makeGrid()

makeGrid(row, column);
form.addEventListener('click', function(e){
	e.preventDefault();
	
	let row = document.getElementById('inputHeight').value;
	let column = document.getElementById('inputWidth').value;

    canvas.firstElementChild.remove();
    makeGrid(row, column);
});

function makeGrid(row, column) {

	// Loop to insert the rows
    for (var i = 0; i < row; i++) {
		let row = canvas.insertRow(0);
		
	// Loop to insert the cells
    for (var j = 0; j < column; j++) {
            let cell = row.insertCell(0);

        cell.addEventListener('click', function(e){
                cell.style.backgroundColor = color.value;
            if (cell.value.backgroundColor === color.value){
                cell.backgroundColor.remove();
                  }

            });
        }
    }
}

