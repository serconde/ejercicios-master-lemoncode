console.log("************** DELIVERABLE 01 *********************");

const head = ([first]) => first;

const tail = ([,...rest]) => [...rest];

const init = (arr) => arr.slice(0, arr.length - 1);

const last = (arr) => arr[arr.length - 1];

const arr = ['cat', 'dog', 'elephant'];

console.log("arr = [" + arr + "]");

console.log("head(arr)");
console.log(head(arr));

console.log("tail(arr)");
console.log(tail(arr));

console.log("init(arr)");
console.log(init(arr));

console.log("last(arr)");
console.log(last(arr));