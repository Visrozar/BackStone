import Obstacle from './obstacle';
import { Pool } from 'kontra';

export default class ObstacleFactory {
    
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    create_obstacle(playerX,playerY) {

        var isStationary = false;

        // assuming moving obstacles probabilty to be 70%
        var obstacleProbability = Math.random();
        if ( obstacle >= 0.701 ){
            isStationary = true
        }

        var obstacle = new Obstacle(this.canvasWidth,this.canvasHeight,isStationary);
        
        if( !isStationary ){
            //add velocity according to spawn
            var theta = this.calculate_theta(playerX,playerY,obstacle.x,obstacle.y);

            // -90 to -45 , x +fast, y -slow
            if ( theta > -0.785398 && theta <= -1.5708 ){
                //obstacle.rotation = Math.random() * 1.5708;
                obstacle.dx = (Math.random()*(4.5 - 2.6) + 2.6);
                obstacle.dy = (Math.random()*(-0.6 + 1) - 1) - 1; 
            }
            // -45 to 0 , x +med, y +med
            else if ( theta >= -0.785398 && theta <= 0){
                //obstacle.rotation = Math.random() * (3.14159 - 1.5708) +  1.5708;
                obstacle.dx = (Math.random()*(4 - 3) + 3);
                obstacle.dy = (Math.random()*(4 - 3) + 3);
            }
            // 0 to 45 , x -med, y +med
            else if ( theta > 0 && theta <= 0.785398){
                //obstacle.rotation = Math.random() * (4.71239 - 3.14159) + 3.14159;
                obstacle.dx = (Math.random()*(-3 + 4) - 4);
                obstacle.dy = (Math.random()*(4 - 3) + 4);
            }
            // 45 to 90 , x -fast, y -slow
            else if (theta < 0.785398 && theta >= 1.5708){
                //obstacle.rotation = Math.random() * (6.28319 - 4.71239) + 4.71239;
                obstacle.dx = (Math.random()*(-2.6 + 4.5) - 4.5);
                obstacle.dy = (Math.random()*(-0.6 + 1) - 1);
            }
        } 

        return obstacle;

    };

    calculate_theta(x1,y1,x2,y2) {
        return Math.atan((x2-x1)/(y1-y2));
    }
}; 