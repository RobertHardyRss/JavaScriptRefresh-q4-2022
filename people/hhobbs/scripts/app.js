//@ts-check
let myName = "Hunter";
let CLMN = console.log(myName);
let Deceased = false;
let age = "13 3/4";
console.clear()

let output = document.getElementById("browser-output");

output.innerText = myName;

let isItFalsy = [
    0,
    -0,
    "",
    [],
    {},
    {} == {},
    function () {},
    undefined,
    null,
    true,
    "false",
    "0",
];

let trueValues = isItFalsy.filter((x) => x);
let falseValues = isItFalsy.filter((x) => !x);
console.log("True Values", trueValues, "False Values", falseValues);

isItFalsy.forEach((item) => {
    // boolean false
    let outputString = `\n${typeof item} ${item} `;
    outputString += item ? "is true" : "is false";
    output.innerText += outputString;
});

document.addEventListener("mousemove", (e) => {
    output.innerText = `x: ${e.x} y: ${e.y}`
    console.log(`Passed Function: mousemove`)
});

document.addEventListener("keypress", () => {
    output.innerText = `Passed Function: keypress.
    Function: Math.Random()*100
    Number: ${Math.random()*100}`
    console.log("Passed Function: keypress")
});

document.addEventListener("dblclick", () => {
    console.clear()
    console.log("Cleared Console")
    output.innerText = `Cleared Console.
    Press Ctrl + Shift + I to show console.
    `
});

document.addEventListener("")