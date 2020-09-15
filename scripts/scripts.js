// display screen

// create an array

let displayArray = [];

// listen for button clicks
// figure out which button was clicked
// push clicked button to array
// display array on screen

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", function () {
		displayArray.push(document.querySelectorAll("button")[i].innerHTML);
		document.querySelector("#display").value = displayArray;
	});
}

// basic calculations

// add
function add(num1, num2) {
	return num1 + num2;
}

//multiply
function multiply(num1, num2) {
	return num1 * num2;
}

//subtract
function subtract(num1, num2) {
	return num1 - num2;
}

//divide
function divide(num1, num2) {
	return num1 / num2;
}

//calculate
function calculator(num1, num2, operator) {
	return operator(num1, num2);
}
