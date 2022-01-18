// display message to the user
function getMessage() {
	let userMessage = document.getElementById("message").value;
	Swal.fire(
		'Button Clicked!',
		userMessage,
		'success!'
	)
}

function getValues() {
	alert("Hello Sloth");
}

// Program Entry Point
function getValues2() {
	let startingValue = document.getElementById("startValue").value;
	let endValue = document.getElementById("endValue").value;

	startValue = parseInt(startValue);
	endValue = parseInt(endValue);

	// check to see if user input value is int
	if (Number.isInteger(startingValue) && Number.isInteger(endValue)) {

		// generate a list of numbers
		generateNumbers(startingValue, endValue);

	} else {
		Swal.fire({
			icon: 'error',
			title: 'Whoops...',
			text: 'Only Integers are allowed for Hondo.'
		})
	}
}

function generateNumbers(startValue, endValue) {
	let numbers = [];
	for (let i = startValue; i < endValue; i++) {
		numbers.push(i);
	}
	return numbers;
}

function displayNumbers(numbers) {
	let templateRows = "";
	let className = "";

	for (let i = 0; i < numbers.length; i++) {
	
		let number = numbers[i];

		if (number % 2 == 0) {
			className = "even"
		} else {
			className = "odd"
		}

		let row = `<tr><td class="${className}">${number}</td></tr>`;
		templateRows += row;
	}
	document.getElementById("results").innerHTML = templateRows;
}