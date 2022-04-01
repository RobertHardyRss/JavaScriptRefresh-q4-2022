
/** @type (HtmlCanvasElement) */
//@ts-ignore
let canvas =  document.getElementById("canvas-1");

let ctx = canvas.getElementById("2d");
canvas.width = window.innerWidth

ctx.fillRec(0, 0, canvas.width, canvas.height)

document.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height =window.innerWidth;
    ctx.fillRec(0, 0, canvas.width, canvas.height);
});

ctx.fillRec(0, 0, canvas.width, canvas.height)

