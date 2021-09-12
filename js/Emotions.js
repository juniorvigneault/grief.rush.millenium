class Emotions {
  constructor(x, y, w, h, world, f, b, stoic, red, green, blue) {
    let options = {
      // friction against the rectangles 0 = hey slide off each other
      // 1 = they stick more together
      friction: f,
      // restitution = bodies bouncing off 0 = not bouncing 1 = bouncing
      restitution: b,
      isStatic: stoic
    }

    this.body = Bodies.rectangle(x, y, h, w, options);

    this.w = w;
    this.h = h;

    this.fill = {
      r: red,
      g: green,
      b: blue,
      alpha: 255
    }

    this.color = 0;

    this.emotionReady = false;

    this.screenLimit = height + 200;

    World.add(world, this.body);

  }

  update() {
    this.display();
  }

  display() {
    push();
    let pos = this.body.position;
    let angle = this.body.angle;
    rectMode(CENTER);
    noStroke();
    translate(pos.x, pos.y);
    rotate(angle);
    fillHsluv(this.fill.r, this.fill.g, this.fill.b, this.fill.alpha);
    rect(0, 0, this.w, this.h);
    pop();
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  offScreen() {
    let pos = this.body.position;
    return (pos.y > this.screenLimit);

  }

  changeColor() {
  this.fill = 255;
  }
}
