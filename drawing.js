// Getting the elements for the button and the canvas
const resetButton = document.getElementById("resetbutton");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// Variables to track mouse movement
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set the stroke style for the lines
ctx.strokeStyle = "black";

// Event listeners for mouse events and reset button
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
resetButton.addEventListener('click', resetCanvas);

// Start drawing when the mouse is pressed
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Draw a line following the mouse movement
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Stop drawing when the mouse is released or leaves the canvas
function stopDrawing() {
    isDrawing = false;
}

// Clear the canvas
function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
