// @ts-check

/** @type {HTMLCanvasElement} */
// @ts-ignore
const canvas = document.getElementById("canvas1");

window.addEventListener("resize", () => {
	console.log("here");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
});

const ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Firework {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	createParticle() {}
}

class Spark {
	constructor(
		/** @type {HTMLCanvasElement} */ ctx,
		/** @type {number} */ x,
		/** @type {number} */ y
	) {
		this.x = {
			pos: x,
			speed: Math.random() * 5 + 1,
			direction: Math.random() > 0.5 ? 1 : -1,
		};
		this.y = {
			pos: y,
			speed: Math.random() * 5 + 1,
			direction: Math.random() > 0.5 ? 1 : -1,
		};

		this.radius = 5;
	}

	update() {
		for (const coord in ["x", "y"]) {
			this[coord].pos += this[coord].speed * this[coord].direction;
		}
	}

	draw() {
		ctx.save();
		ctx.fillStyle = "red";
		ctx.arc(this.x.pos, this.y.pos, this.radius, 0, 2 * Math.PI);
		ctx.restore();
	}
}
