// singleTon class
import { init } from 'kontra';

class initialValues {
    constructor() {
        // initial value of backstones, start from 0
        this.backStones = 2;
        this.core = init();
        this.canvas = this.core.canvas;
        this.score = 0;
        this.backgroundSpeed = 4;
        this.colors = ['#DCE775', '#4DD0E1', '#B3E5FC', '#5C6BC0', '#CE93D8',
                      '#ef9a9a','#F06292','#FFF59D','#FFB74D','#FFAB91'];
    }
}

export default new initialValues;
