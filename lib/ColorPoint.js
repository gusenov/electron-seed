import { Point } from './Point.js';

export class ColorPoint extends Point {

    static default() {
        return new ColorPoint(0, 0, 'black')
    }

    constructor(x = 0, y = 0, color = 'white') {
        super(x, y)
        this.color = color
    }

    toString() {
        return '[X=' + this.x + ', Y=' + this.y + ', color=' + this.color + ']'
    }

}
