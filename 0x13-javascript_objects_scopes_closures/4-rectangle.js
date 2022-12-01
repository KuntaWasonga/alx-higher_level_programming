#!/usr/bin/node
class Rectangle{
    constructor(h,w) {
        if ((w > 0) && (h > 0)) {
            this.width = w;
            this.height = h;
        }
    }

    print () {
        for (i = 0; i < this.height; i++) {
            s += '\n';
            for (j = 0; j < this.height; j++) {
                s += 'X';
            }
            console.log(s);
        }
    }

    rotate () {
        const alt = this.height;
        this.height = this.width;
        this.width = alt;
    }

    double () {
        this.height *= 2;
        this.width *= 2;
    }
}

module.exports = Rectangle