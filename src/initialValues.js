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
    }
}

export default new initialValues;