const removeFromArray = function(array, ...args) {
    // // Alternative 1
    // arr = arguments[0]; 
    // // Iterate over values to be removed
    // for (let i = 1; i < arguments.length; i++) {
    //     // While occurrences of the value are still in the list 
    //     while (-1 != arr.indexOf(arguments[i])) {
    //         arr.splice(arr.indexOf(arguments[i]), 1);
    //     }
    // }
    // return arr;

    // // Alternative 2 (from official solution)
    // const res = [];
    // array.forEach((item) => {
    //     if (!args.includes(item)) {
    //         res.push(item);
    //     }
    // });
    // return res;

    return array.filter(val => !args.includes(val));
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
