//@ts-check
import { SpriteAnimator } from "./sprite-animator.js";

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");
let ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const BASE_PATH = "../../assets/jetpackman/";

/** @type {SpriteAnimator} */
let animation;
let currentTime = 0;
let imageSelect = document.getElementById("image");

/** @type {HTMLInputElement} */ //@ts-ignore
let framerate = document.getElementById("framerate");
/** @type {HTMLInputElement} */ //@ts-ignore
let scaleFactor = document.getElementById("scaleFactor");
let rangeSelections = {
	frameRate: +framerate.value,
	scaleFactor: +scaleFactor.value,
};

imageSelect.addEventListener("change", (e) => {
	//@ts-ignore
	const option = e.target.options[e.target.selectedIndex];
	const imagePath = `${BASE_PATH}${option.value}`;
	const cols = +option.dataset.cols;
	const rows = +option.dataset.rows;

	animation = new SpriteAnimator(imagePath, cols, rows, ctx);
	animation.frameRate = rangeSelections.frameRate;
	animation.scaleFactor = rangeSelections.scaleFactor;
});

framerate.addEventListener("change", (e) => {
	//@ts-ignore
	rangeSelections.frameRate = +e.target.value;
	if (animation) animation.frameRate = rangeSelections.frameRate;
	console.log("framerate", rangeSelections.frameRate);
});

scaleFactor.addEventListener("change", (e) => {
	//@ts-ignore target has value
	rangeSelections.scaleFactor = +e.target.value;
	if (animation) animation.scaleFactor = rangeSelections.scaleFactor;
	console.log("scaleFactor", rangeSelections.scaleFactor);
});

/** @param {number} timeStamp */
function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timeStamp - currentTime;
	currentTime = timeStamp;
	if (animation) {
		animation.update(elapsedTime);
		animation.render();
	}
	requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);
