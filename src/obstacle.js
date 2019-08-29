import { Sprite,  } from 'kontra';

export default class Obstacle extends Sprite.class {

    constructor(posX,posY,velX,velY,color,width,height,backgroundSpeed){
        this.x = posX;
        this.y = posY;
        this.dx = velX;
        this.dy = velY + backgroundSpeed;
        this.color = color;
        this.width = width;
        this.height = height;
    };

};