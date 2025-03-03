const palindromes = function (string) {
    const arr  = string.toLowerCase().split("")
    for (i=0; i<arr.length; i++) {
        if (arr[i] === " " || arr[i] === "," || arr[i] === "." || arr[i] === "!") {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr.join("") === arr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
