class Dustbin {

    constructor (x,y,width,height) {

        var options = {
            restitution:0.2,
        }

        this.body = Bodies.rect(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display() {
        var pos= this.body.position
        var angle = this.body.angle
        push();
        translate(pos.y,pos.x);
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.weight,this.height);
        pop();
    }
}