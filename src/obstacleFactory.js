import Obstacle from './obstacle';
import initialValues from './initialValues';

export default class ObstacleFactory {
    
    constructor(){
    }

    create_obstacle(playerX,playerY) {

        var isStationary = false;

        // assuming moving obstacles probabilty to be 70%
        var obstacleProbability = Math.random();
        if ( obstacleProbability >= 0.701 ){
            isStationary = true
        }

        var obstacle = new Obstacle(initialValues.canvas.width,initialValues.canvas.height,isStationary);
        
        if( !isStationary ){
            //add velocity according to spawn
            var theta = Math.atan((obstacle.x-playerX)/(playerY-obstacle.y));

            // -90 to -45 , x +fast, y -slow
            if ( theta > -0.785398 && theta <= -1.5708 ){
                //obstacle.rotation = Math.random() * 1.5708;
                obstacle.dx = (Math.random()*(3.5 - 1.8) + 1.8);
                obstacle.dy = (Math.random()*(-0.6 + 1) - 1) - 1; 
            }
            // -45 to 0 , x +med, y +med
            else if ( theta >= -0.785398 && theta <= 0){
                //obstacle.rotation = Math.random() * (3.14159 - 1.5708) +  1.5708;
                obstacle.dx = (Math.random()*(2.5 - 2) + 2);
                obstacle.dy = (Math.random()*(6.5 - 6) + 6);
            }
            // 0 to 45 , x -med, y +med
            else if ( theta > 0 && theta <= 0.785398){
                //obstacle.rotation = Math.random() * (4.71239 - 3.14159) + 3.14159;
                obstacle.dx = (Math.random()*(-2 + 2.5) - 2.5);
                obstacle.dy = (Math.random()*(6.5 - 6) + 6  );
            }
            // 45 to 90 , x -fast, y -slow
            else if (theta < 0.785398 && theta >= 1.5708){
                //obstacle.rotation = Math.random() * (6.28319 - 4.71239) + 4.71239;
                obstacle.dx = (Math.random()*(-1.8 + 3.5) - 3.5);
                obstacle.dy = (Math.random()*(-0.6 + 1) - 1);
            }
        } 

        return obstacle;

    };

}; 