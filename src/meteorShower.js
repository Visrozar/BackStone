import { Sprite } from "kontra";
import initialValues from './initialValues';
import themes from './obstacleTheme'; 

class MeteorShower {
    constructor() {
        this.meteors = [];
        this.alive = false;
    }

    addMeteor() {
        if(Math.random() <= 0.4){
            if(this.meteors.length > 5) this.meteors.shift();
            this.meteors.push(this.getMeteor());
        }
    }

    getMeteor() {
        return Sprite({
            width: 60,
            height: 60,

            x: Math.random() * (initialValues.canvas.width),
            y: -this.height,

            dx: 0,
            dx: 7,

            render: themes.meteor_shower
        })
    }

    update() {
        if(this.alive) this.addMeteor();
        this.meteors.forEach(function(meteor){
            meteor.update();
        })
    }

    render() {
        this.meteors.forEach(function(meteor){
            meteor.render();
        })
    }

    stopMeteorShower() {
        this.meteors = [];
        this.alive = false;
    }

    startMeteorShower() {
        this.alive = true;
    }
}

export default MeteorShower;