/*//
function log(message) {
    console.log(message);
}

var message = 'Hello World';

log(message);
//*/
/*//
function doSomething () {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('Finally: ' + i)
}
doSomething();
//*/
/*//
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;
//*/
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
