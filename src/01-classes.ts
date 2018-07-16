
const { pow, sqrt } = Math;

class Point2DImpl {

    public static fromCoordinates(x: number, y: number) {
        return new Point2DImpl(x, y);
    }

    public static fromPoint(point: Point2DImpl) {
        return new Point2DImpl(point.x, point.y);
    }

    private constructor(public readonly x: number, public readonly y: number) { }

    public distance = (point: Point2DImpl) =>
        sqrt(pow((point.x - this.x), 2) + pow((point.y - this.y), 2))
}

const pointInstance = Point2DImpl.fromCoordinates(1, 4);
const pointInstance2 = Point2DImpl.fromCoordinates(5, 4);

console.log(pointInstance.distance(pointInstance2));
