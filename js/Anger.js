class Anger {
  constructor() {

    let options = {
      bodyA: this.head.body,
      bodyB: this.torso.body,
      length: 10,
      stiffness: 0.2
    }

    this.constraint = Constraint.create()

    this.head = emotions.push(new Emotions(455, 100, 100, 100, world, 0.5, 0.8));
    this.torso = emotions.push(new Emotions(400, 400, 100, 100, world, 0.5, 0.8));

    World.add(world, this.constraint)



    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

    this.emotionsAppear = true;

    setTimeout(() => {
      this.emotionsAppear = false;
    }, 50);

    grounds.push(new Ground(0, 820, 1600, 40, world, 0, 0, 0, 0));
    grounds.push(new Ground(0, -20, 1600, 40, world, 0, 0, 0, 0));
    grounds.push(new Ground(-20, 0, 40, 1600, world, 0, 0, 0, 0));
    grounds.push(new Ground(820, 800, 40, 1600, world, 0, 0, 0, 0));






  }

  update() {
    this.display();
    this.groundBorders();
    this.emotionsTest();


  }

  display() {
    this.background();
  }

  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.l);
    rect(400, 400, 800, 800);
    pop();
  }

  groundBorders() {
    for (let i = 0; i < grounds.length; i++) {
      grounds[i].update();
    }
  }

  emotionsTest() {
    for (let i = 0; i < emotions.length; i++) {
      emotions[i].update();
    }
  }

  mousePressed() {

  }

  mouseDragged() {}
}
