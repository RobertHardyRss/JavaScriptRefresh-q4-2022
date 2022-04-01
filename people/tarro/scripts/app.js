//@ts-check
let myName = "Tanner";
let age = 15;
let isItFalsy = [
    false,
    0,
    -0,
    "",
    [],
    {},
    {} == {},
    function () {},
    undefined,
    null,
    "false",
    "0",
];
let output = document.getElementById("browser-output");

isItFalsy.forEach((item) => {
    // boolean false
    return
    let outputString = `${typeof item } ${item} `;
    outputString += item ? " is truthy" : " is falsey";
    output.innerText += outputString;
    "false"
});

document.addEventListener("click", (e) => {
    output.innerText = `x: ${e.x} ${e.y}`
    console.log(`Function "click" passed. x: ${e.x} y: ${e.y}`)
    
});