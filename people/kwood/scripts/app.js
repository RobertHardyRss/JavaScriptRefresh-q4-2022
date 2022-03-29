//string
let myName = "Kaden Wood";
//boolean
let isOld = false;
//numeric
let age = 14;
//object
let myObject = {
	name: myName,
	age: age,
	old: isOld,
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
	null,
	undefined,
	true,
	"False",
	"0",
	"-0",
];

isItFalsy.forEach((item) => {
	let outputString = `\n${typeof item} ${item}`;

	outputString += item ? " is truthy" : " is falsy";
	output.innerText += outputString;

	//if(! item){
	//output.append(`\n${item} is falsy `);
	//}
	//else{
	//output.append(`\n${item} is truthy `);
	//}
});

let trueValues = isItFalsy.filter((x) => x);
let falseValues = isItFalsy.filter((x) => !x);
console.log(trueValues, falseValues);

document.addEventListener("click", (e) => {
    output.innerText = `x: ${e.x} y: ${e.y}`
});


