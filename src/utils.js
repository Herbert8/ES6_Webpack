

function doAdd(a, b) {
    return a + b;
}


class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return ('(' + this.x +', ' + this.y + ')');
    }
}


export {
    doAdd as myAddFunc,
    Point as MyPointClass
}