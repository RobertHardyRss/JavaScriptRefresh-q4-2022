// @ts-check
const name = "Chris";
const age = 42;
const awesome = true;

class Person {
	constructor({ name, age, children, awesome }) {
		this.name = name;
		this.age = age;
		this.children = children;
		this.awesome = awesome;
	}
}

const zach = new Person({
	name: "Zach",
	age: 14,
	children: [],
	awesome: false,
});

const chris = new Person({
	name,
	age,
	awesome,
	children: [zach],
});

export const addToOutput = (() => {
	const output = document.getElementById("output");

	return (text) => (output.innerHTML += "\n" + text);
})();

export function initialize() {
	const children = chris.children.map((c) => c.name).join(", ");
	addToOutput(`Hello <b>${chris.name}.</b>! Children: <b>${children}</b>`);

	document.addEventListener("click", (ev) => {
		addToOutput(`X: ${ev.x} Y: ${ev.y}`);
	});
}
