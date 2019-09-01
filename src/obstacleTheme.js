export default {
  'movingThemes': {
    'asteroid1': function(context) {
      context.beginPath();
      context.fillStyle = 'darkgrey';
      context.moveTo(this.x, this.y);
      context.lineTo(this.x + 6, this.y - 14);
      context.lineTo(this.x + 22, this.y - 34);
      context.lineTo(this.x + 44, this.y -28);
      context.lineTo(this.x + 66, this.y);
      context.lineTo(this.x + 44, this.y + 20);
      context.lineTo(this.x + 22, this.y + 14);
      context.lineTo(this.x, this.y);
      context.fill();
      context.stroke();

      context.beginPath();
      context.fillStyle = 'grey';
      context.arc(this.x + 28, this.y - 15, 5, 0*Math.PI, 1.8*Math.PI);
      context.stroke();

      context.beginPath();
      context.arc(this.x + 30, this.y + 5, 3, 0*Math.PI, 1.5*Math.PI);
      context.stroke();

      context.beginPath();
      context.arc(this.x + 52, this.y + 2, 2, 0*Math.PI, 1*Math.PI);
      context.stroke();
    }
  }
}
