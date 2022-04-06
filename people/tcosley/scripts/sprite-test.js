// @ts-check
export {}
/** @type {HTMLCanvasElement} */
// @ts-ignore
let canvas = document.getElementById( "SPRITE-1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.addEventListener("resize", () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
});


let sprite = new Image();
sprite.src = "../../assets/jetpackman/mmm.png";
let sprite2 = new Image();
sprite2.src = "../../assets/jetpackman/mm.png";
let sprite3 = new Image();
sprite3.src = "../../assets/jetpackman/mmmm.png";



class Anime {
    /**
     * @param {HTMLImageElement} image
     * @param {Number} cols
     * @param {Number} rows
     * @param {Number} x
     * @param {Number} y
     */
    constructor(image, cols, rows, x, y) {
        this.image = image;
        this.cols = cols;
        this.rows = rows;
        this.baseXSpeed = Math.random() * 5 + 5;
        this.baseYSpeed = Math.random() * 5 + 5;
        this.frameWidth = image.width / cols;
        this.frameHeight = image.height / rows;
        this.currentCol = Math.round(Math.random() * cols);
        this.currentRow = 0;
        this.frameRate = Math.random() * 80 + 40;
        this.x = x;
        this.y = y;
        this.lastFrame = 0;
        this.movement = {
			timeSinceLastUpdate: 0,
			timeToNextUpdate: 1000,
			x: {
				direction: Math.random() >= 0.5 ? 1 : -1,
				speed: this.baseXSpeed,
			},
			y: {
				direction: Math.random() >= 0.5 ? 1 : -1,
				speed: this.baseYSpeed,
			},
		};
        
    }

    update(elapsedtime) {
        this.lastFrame += elapsedtime;
        if (this.lastFrame <= this.frameRate) return
        this.lastFrame = 0;
        this.movement.timeSinceLastUpdate += elapsedtime;
		if (this.movement.timeSinceLastUpdate >= this.movement.timeToNextUpdate) 
		{
			this.movement.x.direction = Math.random() >= 0.5 ? 1 : -1;
			this.movement.y.direction = Math.random() >= 0.5 ? 1 : -1;
			this.movement.x.speed = Math.random() * this.baseXSpeed;
			this.movement.y.speed = Math.random() * this.baseYSpeed;
			this.movement.timeToNextUpdate = Math.random() * 1000 + 500;
			this.movement.timeSinceLastUpdate = 0;
		}
        if(this.x + this.frameWidth / 4 > canvas.width) {
            this.movement.x.direction *= -1
        }
        if(this.x < 0) {
            this.movement.x.direction *= -1
        }
        if(this.y + this.frameHeight / 4 > canvas.height) {
            this.movement.y.direction *= -1
        }
        if(this.y < 0) {
            this.movement.y.direction *= -1;
        }
        this.x += this.movement.x.speed * this.movement.x.direction;
		this.y += this.movement.y.speed * this.movement.y.direction;
        this.currentCol ++;
        if(this.currentCol === this.cols) {
            this.currentCol = 0;
            this.currentRow ++
        }
        if(this.currentRow === this.rows) {
            this.currentRow = 0;
        }


    }

    render() {
        ctx.drawImage(this.image, this.currentCol * this.frameWidth, this.currentRow * this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth / 4, this.frameHeight / 4);
    }
}


let animes = [];
sprite.onload = () => {
    
    canvas.addEventListener("mousemove", (e) => {
        animes.push(new Anime(sprite2, 12, 1, e.offsetX - 50, e.offsetY - 50));
    })
    
}

let currentTime = 0;
/**
 * @param {number} timestamp
 */
function gameLoop(timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elaspsedtime = timestamp - currentTime;
	currentTime = timestamp;
    animes.forEach((a) => {
        a.update(elaspsedtime);
        a.render();
    })
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
