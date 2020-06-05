console.log("********** CHALLENGE: deepAccess ************");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj, ...props) =>
  props.length === 0
    ? obj
    : !!obj[props[0]] && props.length > 1
    ? deepGet(obj[props[0]], ...props.slice(1))
    : obj[props[0]];


console.log("01 - deepGet()");

console.log("obj = "+ JSON.stringify(myObject));

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}


const myNewObject = {};
const deepSet = (value, obj, ...props) =>
  props.length == 0
    ? undefined
    : props.length == 1
      ? (obj[props[0]] = value)
      : !!obj[props[0]] 
        ? deepSet(value, obj[props[0]], ...props.slice(1))
        : deepSet(value, obj[props[0]] = {}, ...props.slice(1));


console.log("02 - deepSet()");

console.log("obj = "+ JSON.stringify(myNewObject));

deepSet(1, myNewObject, "a", "b");
console.log(JSON.stringify(myNewObject)); // {a: { b: 1}}
deepSet(2, myNewObject, "a", "c");
console.log(JSON.stringify(myNewObject)); // {a: { b: 1, c: 2}}
deepSet(3, myNewObject, "a");
console.log(JSON.stringify(myNewObject)); // {a: 3}
deepSet(4, myNewObject);
console.log(JSON.stringify(myNewObject)); // Do nothing // {a: 3}
