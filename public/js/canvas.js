import { toolsTechImage } from "./constant.js";
import { getpercent } from "./utils.js";
const toolSlide = document.getElementById("toolslide");
const toolctx = toolSlide.getContext("2d");
let tools = document.querySelector(".tools");
toolctx.imageSmoothingQuality = "high";
toolSlide.width = tools.clientWidth * devicePixelRatio;
toolSlide.height = tools.clientHeight * devicePixelRatio;
const toolW = toolSlide.width;
const toolH = toolSlide.height;

let lastTime = 0;
const fps = 1;
const frameInterval = 1000 / fps;


const imageElem = [];

Object.values(toolsTechImage).forEach((url) => {
  const img = new Image();
  img.src = `img/toolsandlanguage/${url}`;
  imageElem.push(img);
});

class ToolAndTechnologySlide {
  constructor(x) {
    this.image = null;
    this.x = x;
    this.y = getpercent(toolH, 25);
    this.imgx = x;
    this.nx = x;
    this.ny = getpercent(toolH, 25);
    this.height = getpercent(toolH, 50);
    this.imagesize = getpercent(toolH, 50);
    this.size = getpercent(toolH, 35);
    this.strokeStyle = "#A182AB";
  }

  drawImage(img) {
    const gradient = toolctx.createRadialGradient(
      this.nx + this.height / 2,
      this.height,
      0,
      this.nx + this.height / 2,
      this.height,
      this.size
    );

    gradient.addColorStop(0.65, "rgba(254, 207, 255, 0.10)");
    gradient.addColorStop(1, "rgba(246, 78, 250, 0.03)");

    toolctx.fillStyle = gradient;
    toolctx.strokeStyle = "#A182AB";
    toolctx.beginPath();
    toolctx.arc(
      this.nx + this.height / 2,
      this.height,
      this.size,
      0,
      Math.PI * 2
    );
    toolctx.fill();
    toolctx.stroke();

    toolctx.drawImage(img, this.imgx, this.ny, this.imagesize, this.imagesize);
  }

  update() {
    imageElem.forEach((img, idx) => {
      if (idx < 6) {
        this.nx = idx * (this.x - getpercent(toolW, 5)) + getpercent(toolW, 5);

        if (idx == 0 || idx == 4) {
          this.imagesize = getpercent(toolH, 25);
          this.ny = this.y + this.imagesize / 2;
          this.size = getpercent(toolH, 25);
          this.imgx = this.nx + this.y / 2;
        } else if (idx % 2 == 1) {
          this.imagesize = getpercent(toolH, 35);
          this.ny = this.y + this.imagesize / 4;
          this.size = getpercent(toolH, 30);
          this.imgx = this.nx + this.y / 4;
        } else {
          this.imagesize = getpercent(toolH, 50);
          this.ny = this.y;
          this.size = getpercent(toolH, 35);
          this.imgx = this.nx;
        }

        this.drawImage(img);
      }
    });
  }
}

const toolsandTech = new ToolAndTechnologySlide(
  getpercent(toolW, 20) + getpercent(toolW, 5)
);

export function AnimateSlide(currentTime) {
  const elapsedTime = currentTime - lastTime;
  toolctx.clearRect(0, 0, toolW, toolH);

  // Check if enough time has passed to render the next frame
  if (elapsedTime >= frameInterval) {
    const img = imageElem.pop();
    imageElem.unshift(img);
    lastTime = currentTime - (elapsedTime % frameInterval);
  }

  toolsandTech.update();

  requestAnimationFrame(AnimateSlide);
}
