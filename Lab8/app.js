const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

const balls = [];
const defaultnoOfBalls = 100;
const defaultDistance = 100;
let distance = 0;
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Ball {
  constructor() {
    this.x = canvas.width / 2 + random(-30, 30);
    this.y = Math.random() * canvas.height;
    this.radius = random(5, 20);
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
}

const init = () => {
  balls.length = 0;
  let ballsFromInput = +document.querySelector(".ballsInput").value;
  distance = +document.querySelector(".distance").value;

  if (!ballsFromInput) ballsFromInput = defaultnoOfBalls;
  if (!distance) distance = defaultDistance;

  for (let i = 0; i < ballsFromInput; i++) balls.push(new Ball());
};
const startBtn = document
  .querySelector(".start")
  .addEventListener("click", init);
const resetBtn = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    balls.length = 0;
    document.querySelector(".ballsInput").value = '';
    document.querySelector(".distance").value = ''
  });

const ballsConnection = (balls, dist) => {
  balls.forEach((ball1, index) => {
    balls.slice(index + 1).forEach((ball2) => {
      const distance = Math.sqrt(
        (ball1.x - ball2.x) ** 2 + (ball1.y - ball2.y) ** 2
      );
      if (distance < dist) {
        ctx.beginPath();
        ctx.moveTo(ball1.x, ball1.y);
        ctx.lineWidth = 1;
        ctx.lineTo(ball2.x, ball2.y);
        ctx.stroke();
      }
    });
  });
};

const draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach(function (ball) {
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    if (ball.x < 0 || ball.x > canvas.width) {
      ball.speedX *= -1;
    }
    if (ball.y < 0 || ball.y > canvas.height) {
      ball.speedY *= -1;
    }

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.strokeRect = (20, 20, 80, 100);
    ctx.stroke();
    ctx.fill();
  });

  ballsConnection(balls, distance);
  requestAnimationFrame(draw);
};
draw();