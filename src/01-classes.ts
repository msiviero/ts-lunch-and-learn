
const { pow, sqrt } = Math;

class BetterPoint2D {

    public static fromCoordinates(x: number, y: number) {
        return new BetterPoint2D(x, y);
    }

    public static fromPoint(point: BetterPoint2D) {
        return new BetterPoint2D(point.x, point.y);
    }

    private constructor(public readonly x: number, public readonly y: number) { }

    public distance = (point: BetterPoint2D) =>
        sqrt(pow((point.x - this.x), 2) + pow((point.y - this.y), 2))
}

const betterPoint = BetterPoint2D.fromCoordinates(1, 4);
const betterPoint2 = BetterPoint2D.fromCoordinates(5, 4);

console.log(betterPoint.distance(betterPoint2));
