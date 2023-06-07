"use strict";
function sayHello() {
	console.log("Hello");
}

function sayBye(username) {
	console.log("You will always see me");
	 return "Peace out " + username;
}

let student = "Hector";
function addToGreeting() {
	return "Good morning," + student + "!";
}