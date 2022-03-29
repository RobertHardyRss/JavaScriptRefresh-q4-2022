//@ts-check

//let is better than var. Const is constant. Camel casing is like myName/isOlderThanYou. The orange thing is called a string.
//The older than you is a boolien, only true or false. The myAge variable is a number. Objects(4th variable) are surrounded by
//curly braces. They can be empty or have properties.Objects can have other variables within.

let myName = "Kaywee";

let isOlderThanYou = false;

let myAge = 16;

let kaywee = {
	name: myName,
	age: myAge,
};
//Document.getelement will reference the html, and allow you to write data to it.
let output = document.getElementById("browser-output");

output.innerText = myName;

//arrays have square brackets. Seperate different things/datatypes using commas.
//Strings that have stuff are always truthy.

let isItFalsy = [
	false,
	0,
	-0,
	"",
	[],
	{},
	() => {},
	function () {},
	undefined,
	null,
	true,
	"false",
	"0",
];

//forEach is a method. Methods have open and closed parenhesis. The forEach method takes different arguments, like
// a callback function.

//forEach individually looks at each thing in an array and executes the commands on it.
isItFalsy.forEach((item) => {
	// output string would look like boolen false. This would tell type of item and value.
	let outputString = `\n${typeof item} ${item}`; //backticks allow dynamic strings. The typeof will tell if something is object or array, etc/
	//below is a small, simplified if statement. It says that IF item is true, then the first string will be excecuted(is truthy.)
	outputString += item ? "is truthy" : "is falsy"; //termiary operators
	output.innerText += outputString;
});
//the method below filters for all true values in array.
let trueValue = isItFalsy.filter((x) => x);

//below filters for false. ! means not. So x doesnt equal x, so it's false.
let falseValues = isItFalsy.filter((x) => !x);

//below will output true values and false values under a string title. It will be to the console, which is ctrl shift i
console.log("True Values", trueValue, "False Values", falseValues);

//In a event listener, the first argument is what it's listening for(click), while the next argument is the callback function.
//The function in this scenario has an output variable, that being e. The output will look for the e's cordinent.
document.addEventListener("click", (e) => {
	output.innerText = `x: ${e.x} y: ${e.y}`;
});
