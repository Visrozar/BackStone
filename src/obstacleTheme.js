import initialValues from './initialValues'

export default {

  'movingThemes': {

    'asteroid1': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(6, -14);
      this.context.lineTo(22, -34);
      this.context.lineTo(44, -28);
      this.context.lineTo(66, 0);
      this.context.lineTo(44, 20);
      this.context.lineTo(22, 14);
      this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(28, -15, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.arc(30, 5, 3, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.arc(52, 2, 2, 0, Math.PI);
      this.context.stroke();

      this.context.restore();
    },

    'asteroid2': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(12, -22);
      this.context.lineTo(44, -22);
      this.context.lineTo(66, 0);
      this.context.lineTo(55, 30);
      this.context.lineTo(44, 43);
      this.context.lineTo(16, 48);
      this.context.arc(-1, 40, 8,0.5*Math.PI, 0.7*Math.PI);
      this.context.lineTo(-28, 16);
      this.context.arc(12, -22, 4, 0, Math.PI)
      //this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(-14, 15, 5, 0, 1.8*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.arc(6, 25, 6, 0, 1.5*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.arc(32, 25, 10, 0, 1.5*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.arc(52, 2, 2, 0, Math.PI);
      this.context.stroke();

      this.context.restore();

    },

    'asteroid3': function() {
      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      this.context.beginPath();
      this.context.fillStyle = 'darkgrey';
      this.context.moveTo(0, 0);
      this.context.lineTo(6, -16);
      this.context.lineTo(12, -18);
      this.context.lineTo(32, -27);
      this.context.lineTo(60, -24);
      this.context.lineTo(74, -29);
      this.context.lineTo(79, -27);
      this.context.lineTo(82, 0);
      this.context.lineTo(76, 22);
      this.context.lineTo(46, 16);
      this.context.lineTo(24, 16);
      this.context.arc(24, 0, 14, 0,0.7*Math.PI);
      this.context.lineTo(12, 16);
      this.context.lineTo(6, 14);
      this.context.lineTo(0, 0);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = 'grey';
      this.context.arc(18, 2, 6, 0.3*Math.PI, 1.4*Math.PI);
      this.context.stroke();

      this.context.beginPath();
      this.context.arc(48, -4, 6, 0.2*Math.PI, 1.7*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.arc(36, -14, 6, 0.7*Math.PI, 2*Math.PI);
      this.context.fill();

      this.context.beginPath();
      this.context.arc(72, 10, 6, Math.PI, 1.75*Math.PI);
      this.context.stroke();

      this.context.restore();

    }
  },

  'shooting_star': function() {

    this.context.save();
    this.context.translate(this.viewX,this.viewY);
    this.context.rotate(this.rotation);

    gradientStyle = this.context.createLinearGradient(0, 0, 200, 0);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.fillStyle = gradientStyle;
    this.context.moveTo(0,0);
    this.context.lineTo(126,18);
    this.context.lineTo(126,-18);
    this.context.fill();

    var gradientStyle = this.context.createRadialGradient(75, 50, 5, 90, 60, 100);
    gradientStyle.addColorStop(0, this.color);
    gradientStyle.addColorStop(1, "white");

    this.context.beginPath();
    this.context.fillStyle = gradientStyle;
    this.context.arc(120,0,18,0,2*Math.PI);
    this.context.fill();

    this.context.restore();
  },

  'stationaryThemes': {

    'planet1': function(){

      this.context.save();
      this.context.translate(this.viewX,this.viewY);
      this.context.rotate(this.rotation);

      var gradientStyle = this.context.createRadialGradient(10, 0, 15, 0, 0, 100);
      gradientStyle.addColorStop(0, this.otherColor);
      gradientStyle.addColorStop(1, this.color);

      this.context.beginPath();
      this.context.fillStyle = gradientStyle;
      this.context.arc(0,0,this.width,0,2*Math.PI);
      this.context.fill();
      this.context.restore();
    },

    'planet2': function(){

        this.context.save();
        this.context.translate(this.viewX,this.viewY);
        this.context.rotate(this.rotation);

        var gradientStyle = this.context.createRadialGradient(10, 0, 15, 0, 0, 100);
        gradientStyle.addColorStop(0, this.otherColor);
        gradientStyle.addColorStop(1, this.color);

        this.context.beginPath();
        this.context.fillStyle = gradientStyle;
        this.context.arc(0,0,this.width,0,2*Math.PI);
        this.context.fill();

        let ring = new Path2D();
        ring.moveTo(-this.width+5,-10);
        ring.bezierCurveTo(-this.width*3.5,25,this.width*3.5,25,this.width-5,-10);
        ring.moveTo(this.width-5,-10);
        ring.bezierCurveTo(this.width*2.3,15,-this.width*2,.315,-this.width+5,-10);
        ring.closePath();
        this.context.fill(ring);

        this.context.restore();

    }

  }

}
