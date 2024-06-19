// Idea from Daniel Shiffman
// https://thecodingtrain.com/challenges/86-cube-wave-by-bees-and-bombs


let angle = 0;
let w = 24;
let ma;
let maxD;

let frames = 120;

function setup() {
let canvasContainer = document.getElementById('canvas-container');
let canvas = createCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight, WEBGL);
canvas.parent('canvas-container');
  ma = atan(sin(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
}
function windowResized() {
    let canvasContainer = document.getElementById('canvas-container');
    resizeCanvas(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
}


function draw() {
  background(250,250,250);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);
  rotateZ(-ma);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial()
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }

  angle -= TWO_PI / frames;
}
