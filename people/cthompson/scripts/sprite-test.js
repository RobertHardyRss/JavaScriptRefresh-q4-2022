// @ts-check
export {};

/** @type {HTMLCanvasElement} */
// @ts-ignore
const canvas = document.getElementById("canvas1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
	console.log("resize");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

let sprite = new Image();
sprite.src =
	"../../assets/jetpackman/__jet_pack_man_with_weapon_standing_walk.png";

sprite.onload = () => {
	const a = new Animator({ image: sprite, rows: 3, cols: 5 });
	a.render(ctx);
};

class Animator {
	/**
	 *
	 * @param {Object} param0
	 * @param {HTMLImageElement} param0.image
	 * @param {number} param0.rows
	 * @param {number} param0.cols
	 */
	constructor({ image, rows, cols }) {
		this.image = image;

		this.sliceWidth = image.width / cols;
		this.sliceHeight = image.height / rows;

		const slices = [];
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				slices.push({
					x: c * this.sliceWidth,
					y: r * this.sliceHeight,
				});
			}
		}

		this.slices = slices;
	}

	/**
	 *
	 * @param {CanvasRenderingContext2D} ctx
	 */
	render(ctx) {
		let f = 0;
		const int = setInterval(() => {
			ctx.clearRect(0, 0, this.sliceWidth, this.sliceHeight);
			ctx.drawImage(
				this.image,
				this.slices[f].x,
				this.slices[f].y,
				this.sliceWidth,
				this.sliceHeight,
				0,
				0,
				this.sliceWidth,
				this.sliceHeight
			);

			if (f >= this.slices.length - 1) {
				f = 0;
			} else {
				f++;
			}
		}, 50);

		return () => clearInterval(int);
	}
}
