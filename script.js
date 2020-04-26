//let greeting = 'Hello world';
//alert(greeting);
//
//let age = 32;
//let pi = 3.142;
//let alphabet = 'a';
//
//let number1 = 2;
//let number2 = 3;
//let sum = number1 + number2;
//alert(sum);
//
//function add(number1, number2) {
//	let sum = number1 + number2;
//	return sum;
//}
//add(2, 3);
//
//function alertMessage(message) {
//	alert(message);
//}
//
//let num1 = 2;
//let num2 = 3;
//let sum = add(num1, num2);
//alert(sum);
//
//if(age<18) {
//	alert("You're not an adult");
//} else {
//	alert("You're an adult");
//}
//
//let fullName = {
//	firstName: 'John',
//	lastName: 'Doe'
//}
//alert(fullName.firstName);
//
//let personDetails = {
//	fullName: {
//		firstName: 'John',
//		lastName: 'Doe'
//	},
//	alertMessage: function(message) {
//		alert(message);
//	}
//}
//personDetails.alertMessage('Hello World');
//
let submitButton = document.querySelector('#submit-button-wrapper');
console.log(submitButton);

function emailValidate(email) {
	if(email.includes("@")) {
		return true;
		} else {
		return false;
	}
}

function clickListener(event) {
	event.preventDefault();
	console.log('Button clicked');
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');
	let emailText = emailInput.value;
	let messageText = messageInput.value;
	console.log('email: ', emailText, ' message: ', messageText);
	console.log(emailValidate(emailText));
	if(emailValidate(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
	}
	console.log('Thanks for your message');

}

submitButton.addEventListener('click', clickListener);
