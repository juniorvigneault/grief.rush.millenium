class Anger {
  constructor() {

    this.head = new Emotions(455, 100, 120, 120, world, 0.5, 0.8);
    this.torso = new Emotions(400, 400, 100, 100, world, 0.5, 0.8);
    this.rightLeg = new Emotions(400, 400, 200, 200, world, 0.5, 0.8);
    // this.leftLeg = new Emotions(400, 400, 100, 100, world, 0.5, 0.8);


    emotions.push(this.head);
    emotions.push(this.torso);
    emotions.push(this.rightLeg);



    let options1 = {
      bodyA: this.head.body,
      bodyB: this.torso.body,
      length: 110,
      stiffness: 0.2,
    }



    this.canvasMouse = Mouse.create(canvas.elt);
    // this.canvasMouse.pixelRatio = pixelDensity();
    let options3 = {
      mouse: this.canvasMouse
    }

    this.constraint = Constraint.create(options1);

    mConstraint = MouseConstraint.create(engine, options3);

    World.add(world, mConstraint)




    World.add(world, this.constraint)

    grounds.push(new Ground(0, 820, 1600, 40, world, 0, 0, 0, 0));
    grounds.push(new Ground(0, -20, 1600, 40, world, 0, 0, 0, 0));
    grounds.push(new Ground(-20, 0, 40, 1600, world, 0, 0, 0, 0));
    grounds.push(new Ground(820, 800, 40, 1600, world, 0, 0, 0, 0));

    this.backgroundColor = {
      h: 305,
      s: 34.8,
      l: 90,
      alpha: 0
    }

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
