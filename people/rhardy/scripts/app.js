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
