
interface Point {
    readonly x: number;
    readonly y: number;
}

/* Classes can implement interfaces  */
class Point2D implements Point {
    constructor(
        public readonly x: number,
        public readonly y: number,
    ) { }
}

/* Literal objects can implement interfaces  */
const p3: Point = { x: 1, y: 6 };

/* Interfaces can be used to "type" objects coming from outside */
const jsonString = `{ "x": 5, "y": 12 }`;
const p4: Point = JSON.parse(jsonString);

/* Optional properties */
interface User {
    name: string;
    age?: number;
}

const u: User = {
    name: "Marco",
};

const u2: User = {
    name: "Marco",
    age: 35,
};

/* Covariant type compatibility */
interface Point3D { x: number; y: number; z: number; }

const point3d = { x: 1, y: 4, z: 5 };
const point2d = point3d;
