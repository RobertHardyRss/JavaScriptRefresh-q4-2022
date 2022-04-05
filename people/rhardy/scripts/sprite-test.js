//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// let sprite = new Image();
	// sprite.src =
	// 	"../../assets/jetpackman/__jet_pack_man_with_weapon_standing_walk.png";

	// ctx.drawImage(sprite, 0, 0);
});

/** @type {HTMLImageElement} */
//@ts-ignore
let sprite = document.getElementById("jetpack-01");

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

		this.frameRate = 500;
		this.lastDraw = 0;
	}

	update(timeElapsed) {
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
		ctx.drawImage(
			this.image,
			this.currentCol * this.frameWidth,
			this.currentRow * this.frameHeight,
			this.frameWidth,
			this.frameHeight,
			0,
			0,
			this.frameWidth,
			this.frameHeight
		);
	}
}
