let colorInput = $('#colorPicker').val() // Select color input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').on('submit', function(makeGrid) { // On submitting the form, call this function to create the grid/table
	let pixelCanvas = $('#pixelCanvas'); // Selects the table element

	let tBody = $('<tbody></tbody>'); // Creates table body

	let td, tr; // Defines the variables to be used for rows and columns

	let height = $('#inputHeight').val() // Select size height input

	let width = $('#inputWidth').val() // Select size width input	

	pixelCanvas.empty(); // Empties the old table

	for (let row = 0; row < height; row++) { // Creates multiple table rows in a for loop, starting from zero, until inputted height is reached
		tr = $('<tr></tr>'); 

		let col = 0;
		while (col < width) { // Creates multiple table columns in a while loop, starting from zero, until inputted width is reached
			td = $('<td></td>');

			tr.append(td); // Inserts a table cell in each row

			col++;
		}  

		tBody.last().append(tr); // Insers a new row in the table body
	}

	pixelCanvas.append(tBody); // Inserts the created table body in the table

	pixelCanvas.on('mousedown mouseover', 'td', function(color) { // When any cell of the table is clicked on and mouse dragged over, call this function to color multiple cells

		if (color.buttons === 1) { // If the left mouse button is clicked
			$(this).css('background-color', $('#colorPicker').val()); // Change background color of selected grid cell to inputted color	
		}	
	});

makeGrid.preventDefault(); // Prevents default action from happening
});