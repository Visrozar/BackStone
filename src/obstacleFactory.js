import Obstacle from './obstacle';

export default class ObstacleFactory {
    
    constructor(canvasWidth,canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    create_obstacle(playerX,playerY) {
        var obstacle = new Obstacle(this.canvasWidth,this.canvasHeight);
        var theta = this.calculate_theta(playerX,playerY,obstacle.x,obstacle.y);

        // 0 to 45 , rotate between 0 to 90
        if ( theta >=0 && theta <= 0.785398){
            obstacle.rotation = Math.random() * 1.5708; 
        }
        // 45 to 90 , rotate between 90 to 180
        else if ( theta > 0.785398 && theta <= 1.5708){
            obstacle.rotation = Math.random() * (3.14159 - 1.5708) +  1.5708;                  
        }
        // 90 to 135 ~ -90 to -45 , rotate between 180 to 270
        else if ( theta < -0.785398 && theta <= -1.5708){
            obstacle.rotation = Math.random() * (4.71239 - 3.14159) + 3.14159;
        }
        // 135 to 180 ~ -45 to 0 , rotate between 270 to 360
        else if (theta < 0 && theta >= -0.785398){
            obstacle.rotation = Math.random() * (6.28319 - 4.71239) + 4.71239;
        } 

        return obstacle;

    }

    calculate_theta(x1,y1,x2,y2) {
        return Math.atan((x2-x1)/(y2-y1));
    }

}; 