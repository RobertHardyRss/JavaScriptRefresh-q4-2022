//@ts-check

//let is better than var. Const is constant. Camel casing is like myName/isOlderThanYou. The orange thing is called a string.
//The older than you is a boolien, only true or false. The myAge variable is a number. Objects(4th variable) are surrounded by
//curly braces. They can be empty or have properties.Objects can have other variables within.

let myName = "Kaywee";

let isOlderThanYou = false;

let myAge = 16;

let Kaywee = {
	name: myName,
	age: myAge,
};
//Document.getelement will reference the html, and allow you to write data to it.
let outPut = document.getElementById('"browser-output"');

outPut.innerText = myName;
