export default class rewind {
    constructor() {
        this.rewind_length = 100; // the time to rewind
        this.rewind = []; // motion data to be stored
    }

    back() {
        let rewind = this.rewind.pop();
        return {
            x: rewind.x,
            y: rewind.y,
        }
    }

    add(x, y) {
        if (this.rewind_length <= this.rewind.length) {
            this.rewind.shift();
        }
        this.rewind.push({
            x: x,
            y: y
        })
    }

    doneRewind() {
        return this.rewind.length <= 0;
    }
}