//@ts-check

//the thing below lets VScode know it's an html canvas.
/** @type {HTMLCanvasElement} */
//@ts-ignore
let canvas = document.getElementById("canvas-420");
let ctx = canvas.getContext("2d");
//canvas's width is equal to window of browser.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//the event listner below will resize the canvas if it is resized by the user.
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

//Below is drawing a rectangle. The stuff within the parenthesis is the location and size. In this case, it's the size of the
//canvas.
//ctx.fillRect(0, 0, canvas.width, canvas.height);

//the class below will made the fireworks. It's a class. The constructor declares the variables and stuff.
class Fireworks {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.sparks = [];
		this.createSparks();
		//determines the opacity. 0 is transparent. 1 is opaque. It starts at 1.
		this.opacity = 1;
		//the variable below determines if the firework is visable.
		this.isVisible = true;
	}

	createSparks() {
		//the one below will create particles based on  a number from 10 to 100.
		let sparkCount = Math.random() * 90 + 10;

		//the first part of the forloop is the iterator/the value that will control the variable.
		//the next part is the loop function. It will keep looping until conditions are met/false.
		for (let i = 1; i <= sparkCount; i++) {
			//the one below will push the sparks down here and create a bunch of sparks at this.x/this.y location.
			this.sparks.push(new Sparks(this.x, this.y));
		}
	}

	update() {
		//the opacity will go down by 5 %
		this.opacity -= 0.05;
		//the isVisible variable is when opacity is greater than 0. So still seeable.
		this.isVisible = this.opacity > 0;
	}
	draw() {
		ctx.save();
		//below says that the overall opacity of everything is determined by the opacity variable.
		ctx.globalAlpha = this.opacity;

		this.sparks.forEach((s) => {
			//same as sparks.update/draw
			s.update();
			s.draw();
		});
		ctx.restore();
	}

	render() {}
}

class Sparks {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		//below is how big they are. They are 5 px.
		this.radius = 5;
		//below determines how fast the sparks are going. This will be a random number between 1 and 6
		this.xSpeed = Math.random() * 5 + 1;
		this.ySpeed = Math.random() * 5 + 1;
		//below determines what direction the sparks go. In this case, it will be between 1 and neg 1. That is because math random returns that range.
		this.xDirection = Math.random() > 0.5 ? 1 : -1;
		this.yDirection = Math.random() > 0.5 ? 1 : -1;
	}

	update() {
		//below tells the update method to change the x and y position based on speed and direction
		this.x += this.xSpeed * this.xDirection;
		this.y += this.ySpeed * this.yDirection;
	}
	draw() {
		ctx.save();
		//below is color
		ctx.fillStyle = "red";
		//below is drawing the actual circle. You need to draw the path first, then fill it in. 2*Math.Pi is full circle, while
		//Math.Pi is half circle. Put raidus, and x and y cord.
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.restore();
	}
}

let fireworks = [];

canvas.addEventListener("click", (e) => {
	//below pushes the fireworks made. New fireworks will be generated at where e is located x and y wise.  E is the "click"
	fireworks.push(new Fireworks(e.offsetX, e.offsetY));
});

//below is drawing loop for animating.

function drawLoop() {
	//. Ctx= context. Also, below is the clear function. It will clear the entire canvas of everything that is drawn.
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	fireworks.forEach((f) => {
		f.update();
		f.draw();
	});
	//below will filter all not visible fireworks.
	fireworks = fireworks.filter((f) => f.isVisible);

	//below will call the thing everytime it refreshed. It will call the drawlopp.
	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
