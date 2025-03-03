const fibonacci = function(num) {
    let fib = [0, 1];
    if (+num >= 0) {
        for (i=2; i<=num; i++) {
            fib[i] = fib[i-1] + fib[i-2]
        }

        return fib[num];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
