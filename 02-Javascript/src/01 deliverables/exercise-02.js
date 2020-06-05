console.log("************** DELIVERABLE 02 *********************");

const concat = ([...a], [...b]) => [...a, ...b];

const concatMultiple = (...[...arr]) => arr.reduce((acc, current) => [...acc, ...current]);

const a = [10, 20, 30];
const b = [40, 50, 60];
const c = [70, 80];
const d = [90];

console.log("a = [" + a + "]");
console.log("b = [" + b + "]");
console.log("c = [" + c + "]");
console.log("d = [" + d + "]");

console.log("concat(a, b)");
console.log(concat(a, b));

console.log("concatMultiple(a, b, c, d)");
console.log(concatMultiple(a, b, c, d));