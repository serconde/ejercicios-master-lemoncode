console.log("************** PRACTICE *********************");
console.log("Use folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("************* biggestWord *******************");
function biggestWord(phrase) {
  let longestWord = "";
  let phraseWords = phrase.split(/\s/);

  for (let word of phraseWords) {
    longestWord = word.length > longestWord.length ? word : longestWord;
  }

  return longestWord;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

console.log("**************** values *********************");
function values(obj) {
  let valueList = [];

  for (let property in obj) {
    if (!obj.__proto__.hasOwnProperty(property)) {
      valueList.push(obj[property]);
    }
  }

  return valueList;
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

console.log("************* printAverage ******************");
function printAverage(classResults) {
  const marks = [
    "Muy deficiente",
    "Muy deficiente",
    "Muy deficiente",
    "Muy deficiente",
    "Insuficiente",
    "Suficiente",
    "Bien",
    "Notable",
    "Notable",
    "Sobresaliente",
    "Matrícula de Honor",
  ];
  let results = values(classResults);
  let avgResult = results.reduce((sum, r) => sum + r, 0) / results.length;
  let markIndex = parseInt(avgResult);

  console.log(`${avgResult} ${marks[markIndex]}`);
}

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 2.3,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

console.log(printAverage(eso2o));

console.log("************ checkArguments *****************");
function f(input) {
  return input === undefined ? "Unknown" : input === null ? "" : input;
}

console.log(f(undefined));
console.log(f(null));
console.log(f("This is a test"));

console.log("**************** clone **********************");
function clone(source) {
  return Object.assign({}, source);
}

const obj = { firstName: "José", lastName: "Pérez" };
console.log(obj);
console.log(clone(obj));

console.log("**************** merge **********************");
function merge(source, target) {
  return Object.assign(target, source);
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log("**************** dices **********************");

const dices = (function () {
  let diceOne;
  let diceTwo;

  function reset() {
    diceOne = undefined;
    diceTwo = undefined;
  }

  return function () {
    reset();
    diceOne = Math.round(Math.random() * 5) + 1;
    diceTwo = Math.round(Math.random() * 5) + 1;

    const prize = diceOne === 6 && diceTwo === 6 ? "Premio!!!" : "";
    console.log(`${diceOne} y ${diceTwo} ${prize}`);
  };
})();

dices();
dices();
dices();
dices();
dices();
dices();

console.log("*************** includes ********************");
function includes(array, value) {
  return array.indexOf(value) !== -1;
}

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log("**************** primes *********************");
function showPrimes(from, to) {
  for (let i = from; i <= to; i++) {
    let message = isPrime(i) ? `${i} is PRIME` : `${i} is not a prime`;
    console.log(message);
  }
}

function isPrime(n) {
  n = Math.abs(n);

  if( n <= 1) {
    return false;
  }

  const sqrtOfN = Math.sqrt(n);

  for (let i = 2; i <= sqrtOfN; i++) {

    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

showPrimes(1, 100);

console.log("*************** readBook ********************");

function _isBookRead(books, titleToSearch) {
  return books.findIndex((book) => book.title === titleToSearch && book.isRead) !== -1;
}

var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(_isBookRead(books, "Devastación")); // true
console.log(_isBookRead(books, "Canción de hielo y fuego")); // false
console.log(_isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("************* reverseText *******************");

function reverseText(text) {
  const words = text.split(/\s/);

  return words.reverse().join(' ');
};

console.log(reverseText('Uno dos tres'));

console.log("*************** subsets *********************");
function subsets(word) {
  const letters = Array.from(word).splice(1);
  return letters.map((current, index) => letters.slice(letters.indexOf(current, index)).join(''));
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

console.log("************** zipObject ********************");
function zipObject(keys, values) {
  let object = {};
  keys.map((key, index) => !!key && !!values[index] ? object[key] = values[index] : false);
  return object;
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

console.log("*************** ZZCrypt *********************");

// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  var decryptKey = getDecryptKey();

  return Array.from(secret).map((current) => /\s/.test(current) ? current : decryptKey[current]).join('');
}

function getDecryptKey() {
  var decryptKey = [];

  Array.from(plain).map((letter, index) => decryptKey[cipher[index]] = letter);

  return decryptKey;
}

console.log(decrypt(secret));

