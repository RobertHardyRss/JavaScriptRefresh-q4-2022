//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-1");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
	console.log("test");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

class Firework {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.sparks = [];
		this.createSparks();
        this.opacity = 1;
        this.isVisible = true;
	}
	createSparks() {
		let sparkCount = Math.random() * 90 + 10;
		for (let i = 1; i <= sparkCount; i++) {
			this.sparks.push(new Spark(this.x, this.y));
		}
	}

	update() {
        this.opacity -= 0.05;
        this.isVisible = this.opacity > 0;
    }
	draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        this.sparks.forEach((s) => {
            s.update();
            s.draw();
        })



        ctx.restore();
    }
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
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.restore();
	}
}


let fireworks = [];

canvas.addEventListener("click", (e) => {
    fireworks.push(new Firework(e.offsetX, e.offsetY))
});

function drawLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((f) => {
        f.update();
        f.draw();
    })
    fireworks = fireworks.filter(f => f.isVisible);
    window.requestAnimationFrame(drawLoop);
}
    window.requestAnimationFrame(drawLoop);   