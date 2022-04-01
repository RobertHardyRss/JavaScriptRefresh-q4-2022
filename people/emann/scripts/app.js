//@ts-check


let myName = "Eziah";
//string  
let youngerThanYou =true;
//boolean
let myAge= 15; 
//number


//object
let ezaih ={
  name: myName,
  age: myAge,
}


  let output = document.getElementById('browser-output');
output.innerText = myName;


let isItFalsey = [

    false,
    -0, 

    [],
    {},
    undefined,
    null,
    true,
    "false",
    "0",

];
  isItFalsey.forEach((item)=>{
      //this will tell us the type of item and its vauue
let outputString  = `/n${typeof item} ${item}`;
outputString == item ? "is truthy" : "is falsy";
output.innerText += outputString; 
  });


  let trueValues = isItFalsey.filter((x)=> x );
  let flaseVaules = isItFalsey.filter((x)=> x );
  console.log("True Vaules", trueValues, "False vaules ", flaseVaules);

  document.addEventListener("click", (e) => {
    output.innerText = 'x: ${e.x}  y: ${e.y}'; 

  });