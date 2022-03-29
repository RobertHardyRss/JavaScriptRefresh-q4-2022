//@ts-check

let Name = "Caleb";
let dumb = "true";
let age = 9999990000099999999999999;
let rules = "Sus amogus";
let memes = {
	name: Name,
	dumb: dumb,
	age: age,
};

let output = document.getElementById("browser-output");

output.innerText = rules;

let isItFalse = [
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
	//truth
	true,
	"false",
	"0",
];

isItFalse.forEach((item) => {
	let outputString = `\n${typeof item} ${item}`;
	outputString += item ? "is truthy" : "is falsy";
	output.innerText += outputString;
});

let trueValues = isItFalse.filter((x) => x);
let falseValues = isItFalse.filter((x) => !x);

document.addEventListener("click", (e) => {
	output.innerText = `x: ${e.x} y: ${e.y}`;
});
