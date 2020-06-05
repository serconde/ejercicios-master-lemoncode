console.log("************** DELIVERABLE 03 *********************");

const clone = (source) => Object.assign({}, source);

const merge = (source, target) => Object.assign(target, source);

const personOne = {
    name: "John",
    lastname: "Smith"
};

const personTwo = {
    name: "Michael",
    lastname: "Myers",
    age: 25
}

console.log("personOne = " + JSON.stringify(personOne));
console.log("personTwo = " + JSON.stringify(personTwo));

console.log("clone(personOne)");
console.log(JSON.stringify(clone(personOne)));

console.log("merge(personOne, personTwo)");
console.log(JSON.stringify(merge(personOne, personTwo)));