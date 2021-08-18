let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 10;

drawCircle(x, y, size);

document.addEventListener('keypress', drawCircleAdjuster);

function drawCircleAdjuster(e) {
    if (e.code === "KeyW") {
        y -= 25;
        drawCircle(x,y, size);
    } else if (e.code === "KeyA") {
        x -= 25;
        drawCircle(x,y, size);
    } else if (e.code === "KeyS") {
        y += 25;
        drawCircle(x,y, size);
    } else if (e.code === "KeyD") {
        x += 25;
        drawCircle(x,y, size);
    }
}
