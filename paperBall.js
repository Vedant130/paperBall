class Ball {

    constructor() {

        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.eliptic(50,620,15);
        World.add(world,this.body);
    }

    display () {
        var pos = this.body.position;
        var angle = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        elipticMode(CENTRE);
        eliptic(pos.x,pos.y,15);
        pop();
    }
}