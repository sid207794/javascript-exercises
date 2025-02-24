const repeatString = function(string, num) {
    let conc_string = "";
    if (num < 0) {
        return "ERROR";
    } else {
        for (i=0; i<num; i++) {
            conc_string += string;
        }
        return conc_string;
    }
};

// Do not edit below this line
module.exports = repeatString;
