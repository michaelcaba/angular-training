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

class Point {
    private x: number;
    private y: number;
    
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = 2;
    }
    draw()  {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Point(1, 2)
point.draw();