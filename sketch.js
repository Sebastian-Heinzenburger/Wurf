var SIZE = 5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
  
    group = createDiv((''));
    group.position(10, 10, "relative");

    // canvas.parent(group);

    velocityS = createSlider(0, 1000, 100);
    velocityS.position(0, 0, "relative");
    velocityS.parent(group);

    gravitationalConstantS = createSlider(0, 20, 9.81);
    gravitationalConstantS.parent(group);
    gravitationalConstantS.position(0, 20, "relative");

    heightS = createSlider(0, 373, 20);
    heightS.position(0, 40, "relative");
    heightS.parent(group);

  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(60);

    gravitationalConstant = gravitationalConstantS.value();
    velocity = velocityS.value();
    height = heightS.value();

    noStroke();
    fill(0, 120, 215);
    textSize(16);

    position = 180;
    text("Velocity: " + velocity + " m/s", position, 30);
    text("Gravitational Acceleration: " + gravitationalConstant + " m/s^2", position, 48);
    text("Height: " + height + "m", position, 66);

    for (let x = 0; x < windowWidth; x++) {
        y = - 0.5 * gravitationalConstant * Math.pow(x/velocity, 2) + height;
        y = windowHeight - y;
        ellipse(x, y, SIZE, SIZE);
   }
   
}