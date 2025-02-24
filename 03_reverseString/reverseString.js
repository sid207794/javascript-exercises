const reverseString = function(string) {
    const rev_string = [];
    for (i=0; i<string.length; i++) {
        rev_string[i] = string[i];
    }
    rev_string.reverse();
    return rev_string.join("");
};

// Do not edit below this line
module.exports = reverseString;
