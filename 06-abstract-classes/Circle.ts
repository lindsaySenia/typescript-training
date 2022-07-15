import { Shape } from './Shape'

export class Circle extends Shape {
    
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    // pi*r^2
    //Math is a built-in object with properties and methods for mathematical constants and functions

    constructor(theX: number, theY: number,
                private _radius: number) {

        super(theX, theY);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}