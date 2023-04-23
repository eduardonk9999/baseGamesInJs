const canvas = document.getElementById('canvas')
const context_canvas = canvas.getContext("2d")


let x = 0, y = 0;

function frame() {
  context_canvas.clearRect(0, 0, canvas.width, canvas.height);

  context_canvas.fillStyle = "pink"
  context_canvas.fillRect(x, y, 100, 100)

  x = x + 1;

}

setInterval(frame, 8)