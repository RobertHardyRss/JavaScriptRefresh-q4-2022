//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener("resize", () => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// });

let sprite = new Image();
sprite.src = 
	"../../assets/Jetpackman/__jet_pack_man_with_weapon_standing_walk.png"

ctx.drawImage(sprite, 0, 0);
