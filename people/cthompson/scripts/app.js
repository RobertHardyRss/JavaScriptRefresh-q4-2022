// @ts-check
const name = "Chris";
const age = 42;
const awesome = true;

export const person = {
	name,
	age,
	awesome,
};

export function initialize() {
	const output = document.getElementById("output");
	output.innerHTML = `Hello <b>${person.name}</b>!`;
}
