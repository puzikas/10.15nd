console.log('Aplikacija veikia');

var random = document.getElementById('random');
var next = document.getElementById('next');
var square = document.getElementsByClassName('square');
var cell_number = 1;

function random1() {
	cell_clear();
	cell_number = Math.ceil(Math.random() * 9);
	console.log(cell_number);
	document.getElementById('langelis_' + cell_number).style.background = "red";
}

function next1() {
	console.log('next');
	cell_clear();
	if (cell_number == 9) {
		cell_number = 0;
	}
	cell_number++;
	console.log(cell_number);
	document.getElementById('langelis_' + cell_number).style.background = "red";
}

function cell_clear() {
	for (var index = 1; index <= 9; index++) {
		document.getElementById('langelis_' + index).style.background = "gray";
	}
}