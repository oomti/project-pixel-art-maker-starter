// Udacity Project specification and design criteria:
// Having for or while loop : OK
// Implementing a makeGrid() function and calling upon user submit: OK
// Application of DOM selectors: OK
// Application of event listeners: OK

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
//The HTML and CSS file can be left untouched for completing the project
//The event listener to create the grid
$('input[type=submit]').on('click',function(event) {
	
	//Prevent the form from submitting and page refresh
	event.preventDefault();

	makeGrid();  
});

//The event listener to color the pixel
//Important notice: The table components are created later, so event listeners have to be delegated afterwards.
// The event listener is attached to the parent element, which is a static component on the webpage.
$('#pixel_canvas').on('click','td',function(event) {
	const newColor=$('#colorPicker').val(); //Get the color value from the colorPicker input field
	$(this).css('background-color',newColor);
})
// Description of the makeGrid() function:
function makeGrid() {
	
	//Delete the previous table as a child element of pixel_canvas
	$('#pixel_canvas').empty(); 

	//Reading the input field and assigning the value to variables
	const width=$('#input_width').val();
	const height=$('#input_height').val();
		
	//Creating the table and appending to the canvas
	// The table could be created without using any for loop, with the string.repeat function of JS
	//Rubric project Udacity specification of making for loops : OK
	for (let row_pos=1;row_pos<=height;row_pos++) {
		//Creating the rows with unique ID
		$('#pixel_canvas').append('<tr id="row_'+ row_pos +'"></tr>');
		for (let col_pos=1;col_pos<=width;col_pos++) {
			//Creating the table data elements in each row with unique ID
			$('#row_'+row_pos).append('<td id="row_' + row_pos + '_col_' + col_pos + '"></td>');
		};
	};
	/* //A version with much less function calls
	let table='<td></td>';
	table='<tr>'+ table.repeat(width)+'</tr>';
	table=table.repeat(height);
	$('#pixel_canvas').append(table);
	*/
}






