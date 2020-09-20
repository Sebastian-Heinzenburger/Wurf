var SIZE = 5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
  
    group = createDiv((''));
    group.position(10, 10, "relative");

    velocityS = createSlider(1, 1000, 100);
    velocityS.position(0, 0, "relative");
    velocityS.parent(group);

    gravitationalConstantS = createSlider(0, 20, 9.81);
    gravitationalConstantS.parent(group);
    gravitationalConstantS.position(0, 20, "relative");

    heightS = createSlider(0, windowHeight/1.2, 20);
    heightS.position(0, 40, "relative");
    heightS.parent(group);

  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function _tan(d) {
    return tan(radians(d));
}

function _cos(d) {
    return cos(radians(d));
}

function draw() {

    gravitationalConstant = gravitationalConstantS.value();
    velocity = velocityS.value();
    height = heightS.value();

    if (windowHeight - mouseY < height) return;
    a = degrees(acos(mouseX / dist(0, windowHeight-height, mouseX, mouseY)));

    background(60);
    noStroke();
    fill(0, 120, 215);
    textSize(16);

    position = 180;
    text("Velocity: " + velocity + " m/s", position, 30);
    text("Gravitational Acceleration: " + gravitationalConstant + " m/s^2", position, 48);
    text("Height: " + height + "m", position, 66);

    for (let x = 0; x < windowWidth; x++) {
        y = height + _tan(a) * x - (gravitationalConstant / (2 * pow(velocity, 2) * pow(_cos(a), 2))) * pow(x, 2);
        y = windowHeight - y;
        ellipse(x, y, SIZE, SIZE);
        if (x % 100 == 0) {
            text(x, x, windowHeight-5)
        }
    }
   for (let y = 0; y < windowHeight/1.2; y+=100) {
        text(y, 0, windowHeight - y - 5);
   }

   text("Degrees: " + a.toFixed(1) + "°", position + 300, 30);

   stroke(0, 120, 215);
   strokeWeight(1);
   line(0, windowHeight-height, mouseX, mouseY);
   
   
}