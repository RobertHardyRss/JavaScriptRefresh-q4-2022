export class SpriteAnimator {
	/**
	 * @param {string} imagePath
	 * @param {number} cols
	 * @param {number} rows
	 * @param {CanvasRenderingContext2D} [ctx]
	 */
	constructor(imagePath, cols, rows, ctx) {
		this.image = new Image();
		this.image.src = imagePath;
		this.isLoaded = this.image.complete;

		this.cols = cols;
		this.rows = rows;
		this.ctx = ctx;

		/** @type {Array<Coordinate>} */
		this.frameCoordinates = [];
		this.frameWidth = 0;
		this.frameHeight = 0;
		this.currentFrame = 0;

		this.frameRate = 60;
		this.lastDraw = 0;
		this.scaleFactor = 1;

		this.wireUpLoadListener();
	}

	wireUpLoadListener() {
		if (this.isLoaded) {
			this.init();
			return;
		}

		this.image.addEventListener(
			"load",
			() => {
				this.isLoaded = true;
				this.init();
			},
			{ once: true }
		);
	}

	init() {
		if (!this.isLoaded) return;
		this.frameWidth = this.image.width / this.cols;
		this.frameHeight = this.image.height / this.rows;

		for (let r = 0; r < this.rows; r++) {
			for (let c = 0; c < this.cols; c++) {
				this.frameCoordinates.push(
					new Coordinate(c * this.frameWidth, r * this.frameHeight)
				);
			}
		}
	}

	/** @param {number} timeElapsed */
	update(timeElapsed) {
		if (!this.isLoaded) return;

		this.lastDraw += timeElapsed;
		if (this.lastDraw <= this.frameRate) return;
		this.lastDraw = 0;

		this.currentFrame++;
		if (this.currentFrame === this.frameCoordinates.length) {
			this.currentFrame = 0;
		}
	}

	render() {
		if (!this.isLoaded) return;
		this.ctx.drawImage(
			this.image,
			this.frameCoordinates[this.currentFrame].x,
			this.frameCoordinates[this.currentFrame].y,
			this.frameWidth,
			this.frameHeight,
			0,
			0,
			this.frameWidth * this.scaleFactor,
			this.frameHeight * this.scaleFactor
		);
	}
}

class Coordinate {
	/**
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
