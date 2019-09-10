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
        this.warning = Sprite({
            width: 200,
            height: 100,

            x: initialValues.canvas.width / 2 - 100,
            y: initialValues.canvas.width / 2 - 500,

            dx: 0,
            dy: initialValues.backgroundSpeed,

            render: this.displayWarning

        })
    }

    addMeteor() {
        if (Math.random() <= 0.08 && this.meteors.length < 15) {
            // if (this.meteors.length > 10) this.meteors.shift();
            this.meteors.push(this.getMeteor());
        }
    }

    getMeteor() {
        let width = 60;
        let height = 60;
        let speed = 14;
        return Sprite({
            width: width,
            height: height,

            x: Math.random() * (initialValues.canvas.width),
            y: -height - (initialValues.canvas.height * speed / 4),

            dx: 0,
            dy: speed,

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

    update(player_sprite, loop) {
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
                loop.stop();
            }
        });
    }

    render() {
        if (this.showWarning) {
            this.warning.render();
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
        }.bind(this), 4000);
    }

    startMeteorShower() {
        this.alive = true;
        this.spawn = true;
    }

    commence(player_sprite, loop) {

        //substract mulyiple of 100 from score
        this.meteor_score_check = initialValues.score - Math.floor(initialValues.score / 100) * 100;
        //stop spwaning obstacles at  multiples of 90
        if ((this.meteor_score_check >= this.spawnStopAtScore) && (this.meteor_score_check <= this.startShowerAtScore) && initialValues.spawnObstacle) {
            initialValues.spawnObstacle = false;
            this.showWarning = true;
            setTimeout(function () {
                this.showWarning = false;
            }.bind(this), 4000);
        }

        //start meteor shower at 100
        if ((this.meteor_score_check > this.startShowerAtScore) && (this.meteor_score_check <= this.stopShowerAtScore) && !this.alive) {
            this.startMeteorShower();
        }

        //update meteor shower
        if (this.alive) this.update(player_sprite, loop);

        //stop meteor shower at 130
        if ((this.meteor_score_check > this.stopShowerAtScore) && this.alive) {
            this.stopMeteorShower();
        }

        if ((this.meteor_score_check >= this.spawnStartAtScore) && !this.alive) {
            initialValues.spawnObstacle = true;
        }
    }

    displayWarning() {
        this.context.lineCap = "round";
        this.context.lineJoin = "round";
        this.context.lineWidth = 15;
        let gradient = this.context.createLinearGradient(0, 0, initialValues.canvas.width, 0);
        gradient.addColorStop("0", " magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        this.context.strokeStyle = gradient;
        this.context.fillStyle = gradient;
        this.context.font = initialValues.canvas.width / 40 + "px Verdana";
        let width = initialValues.canvas.width * 0.5;
        let height = initialValues.canvas.height * 0.15;
        this.context.fillText("ALERT! METEOR SHOWER INCOMING!", initialValues.canvas.width / 2 - width / 2 + 50, initialValues.canvas.height / 2 + 5);
        this.context.rect(initialValues.canvas.width / 2 - width / 2, initialValues.canvas.height / 2 - height / 2, width, height);
        this.context.stroke();
    }
}

export default MeteorShower;