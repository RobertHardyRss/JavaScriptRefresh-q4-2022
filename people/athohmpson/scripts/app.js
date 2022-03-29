//@ts-check
let myName = "Artemis";
let isFunny = true;
let myAge = 16;
let cat = {
	name: myName,
	age: myAge,
};
let output = document.getElementById("browser-output");
output.innerText = myName;

let isItFalsey = [
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

isItFalsey.forEach((item) => {
	let outputString = `\n${typeof item} ${item}`;
	outputString += item ? " is truthy" : " is falsey";
	output.innerText += outputString;
});

let trueValues = isItFalsey.filter((x) => x);
console.log(trueValues);

document.addEventListener("click", (e) => {
	output.innerText = `x: ${e.x} y: ${e.y}`;
});
