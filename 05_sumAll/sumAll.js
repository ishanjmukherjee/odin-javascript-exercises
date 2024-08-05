const sumAll = function(a, b) {
    // Alternative check function:
    // (n) => (typeof n == "number" && n % 1 == 0 && n >= 0)
    if (![a, b].every((n) => (Number.isInteger(n) && n >= 0))) {
        return "ERROR";
    }
    let total = 0;
    let minim = Math.min(a, b), maxim = Math.max(a, b);
    for (let i = minim; i <= maxim; i++) {
        total += i;
    }
    return total;
};

console.log(isFinite("90"));

// Do not edit below this line
module.exports = sumAll;
