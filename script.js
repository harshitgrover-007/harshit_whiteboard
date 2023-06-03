// Set the initial drawing context
var ctx = null;

// Initialize the drawing state
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var penColor = '#000000';

// Event listener for color picker
var colorPicker = document.getElementById('color');
colorPicker.addEventListener('change', function() {
  penColor = this.value;
});

// Event listeners for mouse movements
window.addEventListener('mousedown', startDrawing);
window.addEventListener('mousemove', draw);
window.addEventListener('mouseup', stopDrawing);
window.addEventListener('mouseout', stopDrawing);

// Start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.pageX, e.pageY];
}

// Draw on the canvas
function draw(e) {
  if (!isDrawing) return;

  if (!ctx) {
    // Create a new canvas element
    var canvas = document.createElement('canvas');
    canvas.id = 'whiteboard';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    // Get the drawing context
    ctx = canvas.getContext('2d');
  }

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.pageX, e.pageY);
  ctx.strokeStyle = penColor;
  ctx.stroke();

  [lastX, lastY] = [e.pageX, e.pageY];
}

// Stop drawing
function stopDrawing() {
  isDrawing = false;
}

// Render math formulas using MathJax
function renderMathFormulas() {
  MathJax.typesetPromise();
}

// Example math formula rendering
var mathFormula = 'E = mc^2';
renderMathFormulas();
