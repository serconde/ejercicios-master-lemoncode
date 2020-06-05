console.log("********** CHALLENGE: memoization ***********");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

console.log("Memoize a function without parameters");

const memoize = (f: Function) => () =>!!f.prototype._cachedResult ? f.prototype._cachedResult : (f.prototype._cachedResult = f());

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

console.log("Memoize a function with parameters");

const memoizeWithArguments = function (f: Function) {
    let _cache:Array<any> = [];

    return function() {
        const cacheKey = JSON.stringify(arguments);

        return !!_cache[cacheKey]
            ? _cache[cacheKey]
            : _cache[cacheKey] = f.apply(this, arguments);
    }
};

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())
  
const memoizedGreet = memoizeWithArguments(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log("Count: " + count);         // 2