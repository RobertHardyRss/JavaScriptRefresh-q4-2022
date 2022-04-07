//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener("resize", () => {
// 	console.log("test");
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;

// });

let sprite = document.getElementById("jetpack-01");
//@ts-ignore
ctx.drawImage(sprite, 0, 0);

class Animator {
	/**
	 * @param {HTMLImageElement} image
	 * @param {number} cols
	 * @param {number} rows
	 */
	constructor(image, cols, rows) {
		this.image = image;
		this.cols = cols;
		this.rows = rows;

		this.frameWidth = image.width / cols;
		this.frameHeight = image.height / rows;
		this.currentCol = 0;
		this.currentRow = 0;
		this.frameRate = 30;
		this.lastDraw = 0;
		this.x = 0;
		this.y = 0;
	}
	update(timelapsed) {
		this.lastDraw += timelapsed;
		if (this.lastDraw <= this.frameRate) return;
		this.lastDraw = 0;

		this.currentCol++;
		if (this.currentCol === this.cols) {
			this.currentCol = 0;
			this.currentRow++;
		}

		if (this.currentRow === this.rows) {
			this.currentRow = 0;
		}
		this.x += 30;
	}
	draw() {
		ctx.drawImage(
			this.image,
			this.currentCol * this.frameWidth,
			this.currentRow * this.frameHeight,
			this.frameWidth,
			this.frameHeight,
			this.x,
			this.y,
			this.frameWidth,
			this.frameHeight
		);
	}
}
//@ts-ignore
let animation = new Animator(sprite, 5, 3)
let currentTime = 0;
function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	let elapsedTime = timeStamp - currentTime;
	currentTime = timeStamp;
	animation.update(elapsedTime)
	animation.draw();
	requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);

let imageSelect = document.getElementById("image");

imageSelect.addEventListener("change", (e) => {
	console.log(e);
})