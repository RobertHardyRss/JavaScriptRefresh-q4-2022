//@ts-check

// string
let myName = "Robert";
// boolean
let isOlderThanYou = true;
// numeric
let myAge = 51;

// object
let robert = {
	name: myName,
	age: myAge,
};

let output = document.getElementById("browser-output");

output.innerText = myName;

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

isItFalsy.forEach((item) => {
	// this will tell us the type of item and its value
	let outputString = `\n${typeof item} ${item} `;
	outputString += item ? " is truthy" : " is falsy";
	output.innerText += outputString;
});

let trueValues = isItFalsy.filter((x) => x);
let falseValues = isItFalsy.filter((x) => !x);
console.log("True Values", trueValues, "False Values", falseValues);

document.addEventListener("click", (e) => {
	output.innerText = `x: ${e.x} y: ${e.y}`;
});
