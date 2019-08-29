import { Sprite,  } from 'kontra';

export default class Obstacle extends Sprite.class {

    constructor(canvasWidth,canvasHeight){

        super();

        //random Int from interval = Math.floor(Math.random() * (max - min) + min); // considering -10 to width + 10
        this.x = Math.floor(Math.random() * (canvasWidth + 20) - 10);

        // assuming -10 to 70% of height 
        this.y = Math.floor(Math.random() * (canvasHeight + 10) - 10);
        
        this.dx = 1;
        this.dy = 1;

        var availableColors = this.get_colours();
        this.color = availableColors[Math.floor(Math.random() * availableColors.length)];
        
        // 5 to 10
        this.width = Math.floor(Math.random() * (10 - 5 + 1) + 5);
        this.height = Math.floor(Math.random() * (10 - 5 + 1) + 5);

        //center
        this.anchor = {x: 0.5, y:0.5}

    };

    get_colours() {
        return ['red', 'yellow', 'blue']
    }

};