class Ground {
  constructor(x, y, w, h, world, a) {
    let options = {
      // option that makes the ground static
      isStatic: true,
      angle: a,
      friction: 1,
      restitution: 1
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  update(x,y){
    this.display(x,y);
  }

  display(x, y) {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(255,255,255)
    rect(0, 0, this.w, this.h);
    // textAlign(CENTER);
    // textFont(ibmFONTTypewriter)
    // textSize(23)
    // fill(0)
    // text('DENIAL', 0, 8)
    pop();
  }

  removeFromWorld(){
    World.remove(world, this.body)
  }

  fiveGrounds(){

  }
}
