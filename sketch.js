let x = 320;
let y = [180, 20, 400, 300, 150,155];
let speed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 40, 140);
}

function draw() {

  for (let i = 0; i < 6; i++){

  ellipse(x, y[i], 80, 80);
  x += speed;

  if (x > width - 40 || x < 40) {
    speed = -speed;
  }
}


  if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
}
