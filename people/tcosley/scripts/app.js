//@ts-check
let myName = "Thaddy";
let isBuiltDifferent = true;
let age = 5436;
let moneyForMe = {
    name: myName,
    age: age,
    dollers: 34,
    cents: 23,
    poor: true,
};


let output = document.getElementById("browser-output");

output.innerText = myName;

let isItFalsy = [0,
    -0,
    false,
    "",
    [],
    {},
    () => {},
    function() {},
    undefined,
    null,
    true,
    "false",
    "0",
    ];

    isItFalsy.forEach((f) => {

        let outputString = `\n${typeof f} ${f}`;
        outputString += f ? " truthy" : " falsy"
        output.innerText += outputString;

    });

    let trueValues = isItFalsy.filter(x => x === true);
    let falseValues = isItFalsy.filter(x => x === !true);


    document.addEventListener("click", (e) => {
        output.innerText = `x: ${e.x}, y: ${e.y}`;
    })


