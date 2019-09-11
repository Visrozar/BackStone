import Obstacle from './obstacle';
import initialValues from './initialValues';

export default class ObstacleFactory {

    constructor(){
        //
        this.xSFast = 0.008*initialValues.canvas.width * initialValues.backgroundSpeed/4;
        this.xFast = 0.007*initialValues.canvas.width * initialValues.backgroundSpeed/4;
        this.xMed = 0.00067*initialValues.canvas.width * initialValues.backgroundSpeed/4;
        this.xSlow = 0.00049*initialValues.canvas.width * initialValues.backgroundSpeed/4;
        this.yFast = 0.013*initialValues.canvas.height * initialValues.backgroundSpeed/4;
        this.yMed = 0.0084*initialValues.canvas.height * initialValues.backgroundSpeed/4;
        this.ySlow = 0.009*initialValues.canvas.height * initialValues.backgroundSpeed/4;
        this.yMin = 0.0065*initialValues.canvas.height * initialValues.backgroundSpeed/4;
    }

    create_obstacle(playerX,playerY) {

        var isStationary = false;

        // assuming moving obstacles probabilty to be 80%
        var obstacleProbability = Math.random();
        if ( obstacleProbability >= 0.801 ){
            isStationary = true
        }

        var obstacle = new Obstacle(isStationary);

        var theta = Math.atan((obstacle.x-playerX)/(playerY-obstacle.y));
        obstacle.y -= initialValues.canvas.height;

        if( !isStationary ){
            //add velocity according to spawn

            // -90 to -45 , x +fast, y -slow
            if ( theta < -0.785398 && theta >= -1.5708 ){
                //obstacle.rotation = Math.random() * 1.5708;
                obstacle.x = obstacle.x - initialValues.canvas.width;
                obstacle.dx = (Math.random()*(this.xSFast - this.xFast) + this.xFast);
                obstacle.dy = (Math.random()*(this.ySlow - this.yMin) + this.yMin);
            }
            // -45 to 0 , x +med, y +med
            else if ( theta >= -0.785398 && theta <= 0){
           
                //obstacle.rotation = Math.random() * (3.14159 - 1.5708) +  1.5708;
                obstacle.dx = (Math.random()*(this.xMed - this.xSlow) + this.xSlow);
                obstacle.dy = (Math.random()*(this.yFast - this.yMed) + this.yMed);
            }
            // 0 to 45 , x -med, y +med
            else if ( theta > 0 && theta <= 0.785398){

                //obstacle.rotation = Math.random() * (4.71239 - 3.14159) + 3.14159;
                obstacle.dx = (Math.random()*(-this.xSlow - this.xMed) - this.xMed);
                obstacle.dy = (Math.random()*(this.yFast - this.yMed) + this.yMed);
            }
            // 45 to 90 , x -fast, y -slow
            else if (theta > 0.785398 && theta <= 1.5708){
                obstacle.x = obstacle.x + initialValues.canvas.width;
                //obstacle.rotation = Math.random() * (6.28319 - 4.71239) + 4.71239;
                obstacle.dx = -(Math.random()*(this.xSFast - this.xFast) + this.xFast) ;
                obstacle.dy = (Math.random()*(this.yMed - this.ySlow) + this.ySlow);
                console.log(obstacle.x,obstacle.y,obstacle.dx,obstacle.dy);
            }
        }

        if(obstacle.isShootingStar){
          obstacle.dx = obstacle.dx * 2;
          obstacle.dy = obstacle.dy * 2;
          obstacle.y -= initialValues.canvas.height;
          obstacle.rotation = Math.atan(Math.abs(obstacle.dy)/Math.abs(obstacle.dx));
          if (theta > 0){
            obstacle.rotation = Math.PI - obstacle.rotation;
          }
        }

        return obstacle;

    };

};
