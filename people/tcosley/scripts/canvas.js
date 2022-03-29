// @ts-check

/** @type {HTMLCanvasElement} */
// @ts-ignore
let canvas = document.getElementById( "CANVA-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

class fireWorks {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sparks = [];
        this.sparkMaker();
        this.opacity = 1;
        this.isVis = true;
        
    }

    sparkMaker() {
        let sparkCount = Math.random() * 900 + 100;
        for (let i = 1; i <= sparkCount; i++) {
            this.sparks.push(new spark(this.x, this.y));
        }
    }

    update() {
        this.opacity -= 0.01;
        this.isVis = this.opacity > 0;
    }


    render() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        this.sparks.forEach((s) => {
            s.update();
            s.render();
        })
        ctx.restore();
    }
}

class spark {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 3;
        this.xSpeed = Math.random() * 6 + 1;
        this.ySpeed = Math.random() * 6 + 1;
        this.xDirection = Math.random() > 0.5 ? 1 : -1;
        this.yDirection = Math.random() > 0.5 ? 1 : -1;
        this.opacity = 1;
        this.wireUpEvents();
        this.random1 = 360;
        this.random2 = 0;
    }

    wireUpEvents() {
		window.addEventListener("keydown", (e) => {
			this.toggleMovement(e.key);
		});

    }

    /**
	 * @param {string} key
	 */
	toggleMovement(key) {
		switch (key) {
                case "1":
            this.random1 = 360;
            this.random2 = 0;
                break;
                case "2":
            this.random1 = 90;
            this.random2 = 180;
                break;
                case "3":
            this.random1 = 60;
            this.random2 = 270;
                break;
                case "4":
            this.random1 = 60;
            this.random2 = 90;
                break;
                case "5":
            this.random1 = 30;
            this.random2 = 30;
                break;
		}
	}

    update() {
        this.x += this.xSpeed * this.xDirection;
        this.y += this.ySpeed * this.yDirection;
    }

    render() {
        ctx.save();
        ctx.fillStyle = `hsla(${Math.random() * this.random1 + this.random2}, 100%, 50%, 1)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.restore();
    }

}

canvas.addEventListener("click", (e) => {
    fire.push(new fireWorks(e.offsetX, e.offsetY));
});

let fire = [];

function gameloop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fire.forEach((f) => {
        f.update();
        f.render();
    });
    fire = fire.filter(f => f.isVis);

    window.requestAnimationFrame(gameloop);
}
window.requestAnimationFrame(gameloop);



