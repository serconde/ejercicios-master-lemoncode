console.log("********* CHALLENGE: flattenArray ***********");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

console.log(JSON.stringify(sample));

const flattenArray = ([...arrays]) => 
    arrays.length > 0
    ? Array.isArray(arrays[0])
        ?  [...flattenArray(arrays[0]), ...flattenArray(arrays.slice(1))]
        : [arrays[0], ...flattenArray(arrays.slice(1))]
    : [];

    console.log(flattenArray(sample));