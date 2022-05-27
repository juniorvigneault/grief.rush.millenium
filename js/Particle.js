class Particle {

  constructor(x, y, r, fixed, pX, pY, red, green, blue, alpha, string, letterOffsetX, letterOffsetY) {
    let options = {
      friction: 1,
      restitution: 0,
      isStatic: false
    }
    this.body = Bodies.circle(x, y, r, options);
    // converts radius to diameter
    this.r = r * 2;
    World.add(world, this.body);
    this.pX = pX;
    this.pY = pY;

    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;

    this.string = string;

    this.letterOffsetX = letterOffsetX;
    this.letterOffsetY = letterOffsetY;
  }

  display() {
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    ellipseMode(CENTER);
    // noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    // stroke(0)
    noStroke();
    strokeWeight(1);
    fill(0);
    // fill(this.red, this.green, this.blue, this.alpha)
    ellipse(0, 0, this.r);
    pop();


  }

  letterP() {
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    // noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(0);
    textFont('helvetica')
    textAlign(CENTER);
    textSize(200)
    text(this.string, this.pX + this.letterOffsetX, this.pY + this.letterOffsetY);
    pop();
  }

}
