class Denial {
  constructor() {

    this.denialText = {
      string: `DENIAL`,
      size: 120,
      x: 400,
      y: 350,
      vx: 0,
      vy: 0,
      speed: -5,
      finaleX: -800
    };

    this.denialAppear = true;

    setTimeout(() => {
      this.denialAppear = false;
    }, 2000);


    grounds.push(new Ground(400, 200, 800, 100, world, 0));
    // World.add(world, this.body)


  }



  update() {
    this.display();
    this.displayBlood();
    // draw the ground
    for (let i = 0; i < grounds.length; i++) {
      grounds[i].update();
    }
  }

  display() {
    this.background();
    if (this.denialAppear) {
      this.denialTitle();
    }

  }

  denialTitle() {
    push();
    textFont(obrigeFONT);
    textAlign(CENTER, CENTER);
    textSize(this.denialText.size);
    text(this.denialText.string, this.denialText.x, this.denialText.y)
    pop();
  }

  background() {
    push();
    noStroke();
    rectMode(CENTER);
    fillHsluv(305, 34.8, 90)
    rect(400, 400, 800, 800)
    pop();
  }

  // display the droplets of blood
  displayBlood() {
    for (let i = 0; i < bloodDrops.length; i++) {
      bloodDrops[i].update();
      if (bloodDrops[i].offScreen()) {
        // remove drops from the world so the physics engine stops taking care of them when they leave screen
        bloodDrops[i].removeFromWorld();
        // remove drops from the array
        bloodDrops.splice(i, 1);
        // prevents the skipping of a drop when removed from the array by backing up 1 // Daniel Shiffman tip
        i--;
      };
    };
  }

  mousePressed() {
    bloodDrops.push(new Blood(mouseX, mouseY, 10, random(10, 22), world));

  }

}
