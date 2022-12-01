#!/usr/bin/node
class Rectangle {
    constructor(w,h) {
        if ((w > 0) && (h > 0)) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < h; i++){
            for (j = 0; j < w; j++){
                s += 'X';
            }
            s += '\n';
            console.log(s);
        }
    }
}

module.exports = Rectangle;