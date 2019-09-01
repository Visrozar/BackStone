import { Sprite } from 'kontra';
import initialValues from './initialValues';
import themes from './obstacleTheme'

export default class Obstacle extends Sprite.class {

    constructor(isStationary){

        super();
        this.isShootingStar = false;
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
            //colour
            this.color = initialValues.colors[Math.floor(Math.random() * initialValues.colors.length)];

            //probability of shooting start is 10%
            if(Math.random() <= 0.1){
              this.theme = themes.shooting_star;
              this.isShootingStar = true;
            }
            //select one of the available moving themes
            else{
              var availableThemes = Object.keys(themes.movingThemes);
              this.theme = themes.movingThemes[availableThemes[Math.floor(Math.random()*availableThemes.length)]];
            }
        }
        else{

            this.width = this.width * 1.5;
            this.height = this.height * 1.5;
            // stationary object will be inside canvas
            this.x = Math.floor(Math.random() * initialValues.canvas.width);
            this.y = -this.height - 10;

            //colour
            var index = Math.floor(Math.random() * initialValues.colors.length);
            this.color = initialValues.colors[index];
            if(Math.random() <= 0.3){
              this.otherColor = 'white';
            } else {
              var otherColors = initialValues.colors.slice();
              otherColors.splice(index,1);
              this.otherColor = otherColors[Math.floor(Math.random() * otherColors.length)];
            }

            //select one of the available stationary themes
            var availableThemes = Object.keys(themes.stationaryThemes);
            this.theme = themes.stationaryThemes[availableThemes[Math.floor(Math.random()*availableThemes.length)]];
        }

        // initial velocity is zero
        this.dx = 0;
        this.dy = initialValues.backgroundSpeed;

        if(!this.isShootingStar){
          this.rotation = Math.random() * 4.71239;
        }

    };

    //draw
    draw() {
        this.theme();
    }

};
