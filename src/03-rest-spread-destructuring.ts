
/* rest operator */
function varArgsMax(first: number, ...other: number[]) {
    const sumOfOthers = Math.max(...other);
    return Math.max(first, sumOfOthers);
}

console.log(varArgsMax(1, 4, 9));

/* destructuring */
const [first, second, ...remaining] = [1, 2, 3, 4];
console.log(first, second, remaining);

/* spread */
const point = {
    x: 1,
    y: 2,
};
const point2 = { ...point, x: 3 };

console.log(point2);
