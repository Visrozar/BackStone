import { Sprite } from 'kontra';

export default class Obstacle extends Sprite.class {

    constructor(canvasWidth,canvasHeight,isStationary){

        super();

        if (!isStationary){
            // spawn out of canvas
            //random Int from interval = Math.floor(Math.random() * (max - min) + min); // considering -10 to width + 10
            this.x = Math.floor(Math.random() * (canvasWidth + 20) - 10);

            //  to left & right of canvas, y -> -10 to 0.7 * canvasheight
            if((this.x >= -10 && this.x < 0) || this.x > canvasWidth){ 
                this.y = Math.floor(Math.random() * (0.7*canvasHeight + 10) - 10);
            }
            else {
                // in canvas , y -> -10 to 0
                this.y = Math.floor(Math.random() * 10 - 10);
            }
        }
        else{
            // stationary object will be inside canvas
            this.x = Math.floor(Math.random() * canvasWidth);
            this.y = Math.floor(Math.random() * 0.7*canvasHeight);
        }

        // initial velocity is zero
        this.dx = 0;
        this.dy = 1;

        var availableColors = this.get_colours();
        this.color = availableColors[Math.floor(Math.random() * availableColors.length)];
        
        // 40 to 20
        if(!isStationary){
            this.width = Math.floor(Math.random() * (40 - 20 + 1) + 20);
            this.height = Math.floor(Math.random() * (40 - 20 + 1) + 20);
        }
        // only for testing stationary objects
        else{
            this.width = Math.floor(Math.random() * (70 - 60 + 1) + 60);
            this.height = Math.floor(Math.random() * (70 - 60 + 1) + 60);
            this.color = 'white';
        }

        //center
        this.anchor = {x: 0.5, y:0.5}

        //adding ttl - initial 50 frames
        this.ttl = 10;

    };

    // Todo remove
    get_colours() {
        return ['red', 'yellow', 'blue']
    }

};