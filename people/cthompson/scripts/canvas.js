// @ts-check

/** @type {HTMLCanvasElement} */
// @ts-ignore
const canvas = document.getElementById("canvas1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

let fireworks = [];

canvas.addEventListener("click", (e) => {
	fireworks.push(new Firework(e.offsetX, e.offsetY));
});

const drawLoop = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	fireworks.forEach((f) => {
		f.update();
		f.draw();
	});

	fireworks = fireworks.filter((f) => f.isVisible);

	window.requestAnimationFrame(drawLoop);
};

window.requestAnimationFrame(drawLoop);

class Firework {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		/** @type {Spark[]} */
		this.sparks = [];
		this.createSparks();

		this.opacity = 1;
		this.isVisible = true;
	}

	createSparks() {
		this.sparks = Array(Math.floor(Math.random() * 90 + 10))
			.fill(0)
			.map((i) => new Spark(ctx, this.x, this.y));
	}

	update() {
		this.opacity -= 0.05;
		this.isVisible = this.opacity > 0;
		this.sparks.forEach((spark) => spark.update());
	}

	draw() {
		ctx.save();
		ctx.globalAlpha = this.opacity;
		this.sparks.forEach((spark) => spark.draw());
		ctx.restore();
	}
}

class Spark {
	constructor(
		/** @type {CanvasRenderingContext2D} */ ctx,
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
		for (const coord of ["x", "y"]) {
			this[coord].pos += this[coord].speed * this[coord].direction;
		}
	}

	draw() {
		ctx.save();
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.arc(this.x.pos, this.y.pos, this.radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.restore();
	}
}
