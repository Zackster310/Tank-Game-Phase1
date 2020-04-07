var base,head;

class Tanker {

  constructor(x, y, width, height) {

      var options = {
      isStatic: true
    }

    base = Bodies.rectangle(x,y - height*0.1,width,height * 0.2,options);
    base.width = width;
    base.height = height * 0.2;
    World.add(world,base);

    head = Bodies.rectangle(x,base.position.y - (base.height/2 + height*0.4),width * 0.6,height * 0.8,options);
    head.width = width * 0.6;
    head.height = height * 0.8;
    World.add(world,head);
  };

  display(){
    // Draw the tanker the way you like.
    // You could also use an image if you want a specific look
    var Bpos = base.position;
    var Hpos = head.position;
    var angle = head.angle;
    
    push();
    
    strokeWeight(4);
    stroke("green")
    rotate(angle);
    rectMode(CENTER);
    fill(255);

    rect(Bpos.x, Bpos.y, base.width, base.height);
    rect(Hpos.x, Hpos.y, head.width, head.height);
    
    pop();
  };
}
