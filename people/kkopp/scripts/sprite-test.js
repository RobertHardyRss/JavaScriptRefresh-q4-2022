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
});

let sprite = new Image();
sprite.src = 
	"../../assets/Jetpackman/__jet_pack_man_with_weapon_standing_walk.png"

ctx.drawImage(sprite, 0, 0);


class Animator {
	/**
	 * @param {HTMLImageElement} Image
	 * @param {number} cols
	 * @param {number} rows
	 */
	constructor(Image, cols, rows) {
		this.Image = Image;
		this.cols = cols;
		this.rows = rows;

		this.frameWidth = Image.width / cols;
		this.frameHeight = Image.height / rows;
		this.currentCol = 0;
		this.currentRow = 0;

		this.frameRate = 500;
		this.lastDraw = 0;
		}

		update(timeElapsed) {
			this.lastDraw += timeElapsed;
			if(this.lastDraw <= this.frameRate) return;
			this.lastDraw = 0;

			this.currentCol++;
			if(this.currentCol === this.cols) {
				this.currentCol = 0;
				this.currentRow++;
			}

			if(this.currentRow === this.rows) {
				this.currentRow = 0;
			}

		}

		render() {
			ctx.drawImage(this.Image,
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