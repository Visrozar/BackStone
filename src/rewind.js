export default class rewind {
    constructor() {
        this.rewind_length = 100; // the time to rewind
        this.history_length = 50; // the time to remember history
        this.rewind = []; // motion data to be stored
        this.history = []; // last value to be stored
    }

    back() {
        let rewind = this.rewind.pop();
        if (this.history_length <= this.history.length) {
            this.history.shift();
        }
        this.history.push(rewind);
        return {
            x: rewind.x,
            y: rewind.y,
        }
    }

    add(x, y) {
        this.history = [];
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