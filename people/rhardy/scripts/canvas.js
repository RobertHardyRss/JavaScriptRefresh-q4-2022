//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
});

ctx.fillRect(0, 0, canvas.width, canvas.height);

class Fireworks {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.particles = [];
		this.createParticles();
	}

	createParticles() {
		let particleCount = Math.random() * 90 + 10;
	}
	update() {}
	draw() {}
}

class Spark {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.radius = 5;
		this.xSpeed = Math.random() * 5 + 1;
		this.ySpeed = Math.random() * 5 + 1;
		this.xDirection = Math.random() > 0.5 ? 1 : -1;
		this.yDirection = Math.random() > 0.5 ? 1 : -1;
	}

	update() {
		this.x += this.xSpeed * this.xDirection;
		this.y += this.ySpeed * this.yDirection;
	}

	draw() {
		ctx.save();
		ctx.fillStyle = "red";
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        
		ctx.restore();
	}
}
