
/* rest operator */
function varArgsMax(head: number, ...other: number[]) {
    const sumOfOthers = Math.max(...other);
    return Math.max(head, sumOfOthers);
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
const point2 = { ...pointInstance, x: 3 };

console.log(pointInstance2);
