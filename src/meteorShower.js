import { Sprite } from "kontra";
import Rewind from './rewind';
import initialValues from './initialValues';
import themes from './obstacleTheme';

class MeteorShower {
    constructor() {
        this.meteors = [];
        this.alive = false;
        this.spawn = false;
        this.spawnStopAtScore = 70;
        this.startShowerAtScore = 75;
        this.stopShowerAtScore = 95;
        this.spawnStartAtScore = 99;
        this.meteor_score_check = 0;
        this.showWarning = false;

    }

    addMeteor() {
        if (Math.random() <= 0.16 ) {
            // if (this.meteors.length > 10) this.meteors.shift();
            this.meteors.push(this.getMeteor());
        }
    }

    getMeteor() {
        let width = 60;
        let height = 60;
        let speed = 17;
        return Sprite({
            width: width,
            height: height,

            x: Math.random() * (initialValues.canvas.width),
            y: -height - (initialValues.canvas.height * speed / 4),

            dx: 0,
            dy: speed * initialValues.backgroundSpeed/4,
            anchor: {x: 0.5, y: 0.5},

            render: themes.meteor_shower,
            rewind: new Rewind,
            update: function () {
                if (initialValues.rewindMode) {
                    if (!this.rewind.doneRewind()) {
                        let rewind = this.rewind.back();
                        this.x = rewind.x;
                        this.y = rewind.y;
                    }
                } else {
                    this.rewind.add(this.x, this.y);
                }
                this.advance();
            }
        })
    }

    update(player_sprite, loop, endloop) {
        if (this.spawn && !initialValues.rewindMode) this.addMeteor();
        let meteors = this.meteors;
        meteors.forEach(function (meteor, key) {
            // if this meteor is destroyed
            if (meteor.y > (initialValues.canvas.height * 2)) {
                meteors.splice(key, 1);
            }
            meteor.update();
            // check if player collided with meteor
            if (meteor.collidesWith(player_sprite)) {
                // console.log('collided with ' + meteor.collider);
                player_sprite.destroy = true;
                loop.stop();
                endloop.start();
            }
        });
    }

    render() {
        if (this.showWarning) {
            document.getElementById('warning').style.display = 'block';
        }
        else {
            if (this.alive) {
                this.meteors.forEach(function (meteor) {
                    meteor.render();
                })
            }
        }
    }

    stopMeteorShower() {
        this.spawn = false;
        setTimeout(function () {
            this.meteors = [];
            this.alive = false;
        }.bind(this), 8000);
    }

    startMeteorShower() {
        this.alive = true;
        this.spawn = true;
    }

    commence(player_sprite, loop, endloop) {

        //substract mulyiple of 100 from score
        this.meteor_score_check = initialValues.score - Math.floor(initialValues.score / 100) * 100;
        //stop spwaning obstacles at  multiples of 90
        if ((this.meteor_score_check >= this.spawnStopAtScore) && (this.meteor_score_check <= this.startShowerAtScore) && initialValues.spawnObstacle) {
            initialValues.spawnObstacle = false;
            this.showWarning = true;
            setTimeout(function () {
                this.showWarning = false;
                document.getElementById('warning').style.display = 'none';
            }.bind(this), 5000);
        }

        //start meteor shower at 100
        if ((this.meteor_score_check > this.startShowerAtScore) && (this.meteor_score_check <= this.stopShowerAtScore) && !this.alive) {
            this.startMeteorShower();
        }

        //update meteor shower
        if (this.alive) this.update(player_sprite, loop, endloop);

        //stop meteor shower at 130
        if ((this.meteor_score_check > this.stopShowerAtScore) && this.alive) {
            this.stopMeteorShower();
        }

        if ((this.meteor_score_check >= this.spawnStartAtScore) && !this.alive) {
            initialValues.spawnObstacle = true;
        }
    }

}

export default MeteorShower;