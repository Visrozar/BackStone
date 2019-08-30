import { Sprite } from 'kontra';
import initialValues from './initialValues';

export default class Obstacle extends Sprite.class {

    constructor(isStationary){

        super();

        this.width = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        this.height = Math.floor(Math.random() * (40 - 20 + 1) + 20);

        if (!isStationary){
            // spawn out of canvas
            //random Int from interval = Math.floor(Math.random() * (max - min) + min); // considering -10 to width + 10
            this.x = Math.floor(Math.random() * (initialValues.canvas.width + 20) - 10);

            //  to left & right of canvas, y -> -10 to 0.7 * canvasheight
            if((this.x >= -10 && this.x < 0) || this.x > initialValues.canvas.width){ 
                this.y = Math.floor(Math.random() * (0.7*initialValues.canvas.height + 10) - 10);
            }
            else {
                // in canvas , y -> -10 to 0
                this.y = -this.height - 10;
            }

            var availableColors = this.get_colours();
            this.color = availableColors[Math.floor(Math.random() * availableColors.length)];

        }
        else{

            this.width = this.width * 2;
            this.height = this.height * 2;
            this.color = 'white';
            // stationary object will be inside canvas
            this.x = Math.floor(Math.random() * initialValues.canvas.width);
            this.y = -this.height - 10;
        }

        // initial velocity is zero
        this.dx = 0;
        this.dy = initialValues.backgroundSpeed;

        this.rotation = Math.random() * 4.71239;
        this.anchor = {x: 0.5, y: 0.5}

    };

    // Todo remove
    get_colours() {
        return ['red', 'yellow', 'blue']
    }


    //draw
    draw() {
        this.context.beginPath();
        this.context.fillStyle = 'darkgrey';
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(this.x + 6, this.y - 14);
        this.context.lineTo(this.x + 22, this.y - 34);
        this.context.lineTo(this.x + 44, this.y -28);
        this.context.lineTo(this.x + 66, this.y);
        this.context.lineTo(this.x + 44, this.y + 20);
        this.context.lineTo(this.x + 22, this.y + 14);
        this.context.lineTo(this.x, this.y);
        this.context.fill();
        this.context.stroke();

        this.context.beginPath();
        this.context.fillStyle = 'grey';
        this.context.arc(this.x + 28, this.y - 15, 5, 0*Math.PI, 1.8*Math.PI);
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x + 30, this.y + 5, 3, 0*Math.PI, 1.5*Math.PI);
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.x + 52, this.y + 2, 2, 0*Math.PI, 1*Math.PI);
        this.context.stroke();

        //this.context.rotate(this.rotation);
    }

};