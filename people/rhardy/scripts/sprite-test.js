//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const BASE_PATH = "../../assets/jetpackman/";

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

class Animator {
	/**
	 * @param {string} imagePath
	 * @param {number} cols
	 * @param {number} rows
	 */
	constructor(imagePath, cols, rows) {
		this.image = new Image();
		this.image.src = imagePath;
		this.isLoaded = this.image.complete;
		this.wireUpLoadListener();

		this.cols = cols;
		this.rows = rows;

		this.frameWidth = this.isLoaded ? this.image.width / cols : 0;
		this.frameHeight = this.isLoaded ? this.image.height / rows : 0;
		this.currentCol = 0;
		this.currentRow = 0;

		this.frameRate = 60;
		this.lastDraw = 0;

		this.x = 0;
		this.y = 0;
	}

	wireUpLoadListener() {
		if (this.isLoaded) return;
		this.image.addEventListener(
			"load",
			() => {
				console.log(this);
				this.isLoaded = true;
				this.frameWidth = this.image.width / this.cols;
				this.frameHeight = this.image.height / this.rows;
			},
			{ once: true }
		);
	}

	update(timeElapsed) {
		if (!this.isLoaded) return;
		this.lastDraw += timeElapsed;
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
	}

	render() {
		if (!this.isLoaded) return;
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

/** @type {HTMLImageElement} */
//@ts-ignore
let sprite = document.getElementById("jetpack-01");
let animation = new Animator(sprite.src, 5, 3);
let currentTime = 0;

function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timeStamp - currentTime;
	currentTime = timeStamp;
	animation.update(elapsedTime);
	animation.render();
	requestAnimationFrame(animationLoop);
}
requestAnimationFrame(animationLoop);

let imageSelect = document.getElementById("image");

imageSelect.addEventListener("change", (e) => {
	//@ts-ignore
	const option = e.target.options[e.target.selectedIndex];
	const imagePath = `${BASE_PATH}${option.value}`;
	const cols = +option.dataset.cols;
	const rows = +option.dataset.rows;
	const frameRate = animation.frameRate;
	animation = new Animator(imagePath, cols, rows);
	animation.frameRate = frameRate;
});

let framerate = document.getElementById("framerate");

framerate.addEventListener("change", (e) => {
	//@ts-ignore
	animation.frameRate = +e.target.value;
	console.log("framerate", animation.frameRate);
});
