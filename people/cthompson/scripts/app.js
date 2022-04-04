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
export const chris = new Person({
	name,
	age,
	awesome,
	children: [zach],
});

export function initialize() {
	const output = document.getElementById("output");
	const children = chris.children.map((c) => c.name).join(", ");
	output.innerHTML = `Hello <b>${chris.name}.</b>! Children: <b>${children}</b>`;
}
