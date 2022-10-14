const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid back";
const ctx = canvas.getContext("2d");

const bgImage1 = new Image();
bgImage1.src = "../images/road.png";
const bgImage2 = new Image();
bgImage2.src = "../images/road.png";
const carImage = new Image();
carImage.src = "../images/car.png";
let backgroundy = 0;
let backgroundy2 = -canvas.height;
let isGameOver = false;
let gameId = 0;
const carSpeed = 5;
const startingCarPosition = canvas.Width / 2 - 35;
let carX = startingCarPosition;
let carMovement = 1;

const moveCar = () => {
  if (carX + carMovement <= canvas.Width - 35 && carX + carMovement >= 0) {
    carX += carMovement;
  }
};

const startGame = () => {
  ctx.drawImage(bgImage1, 0, backgroundy, canvas.width, canvas.height);
  ctx.drawImage(bgImage2, 0, backgroundy2, canvas.width, canvas.height);
  ctx.drawImage(carImage, 200, 500, 70, 100);
  backgroundy += 1;
  backgroundy2 += 1;
  if (backgroundy > canvas.height) {
    backgroundy = -canvas.height;
  }
  if (backgroundy2 > canvas.height) {
    backgroundy2 = -canvas.height;
  }
  if (isGameOver) {
    cancelAnimationFrame(gameId);
  } else {
    gameId = requestAnimationFrame(startGame);
  }
  moveCar();
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      carMovement = -carSpeed;
    }
    if (event.key === "ArrowRight") {
      carMovement = carSpeed;
    }
  });
  document.addEventListener("keyup", () => {
    carMovement = 0;
  });
};
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
