//@ts-check
/** @type {HTMLCanvasElement} */

//@ts-ignore
let canvas = document.getElementById("Canvas0.0.1");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(0, 0, canvas.width, canvas.height);