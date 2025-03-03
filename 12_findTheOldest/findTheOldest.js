const findTheOldest = function(array) {
    const year = new Date().getFullYear();
    const arr = array.map((obj) => {
        if (obj.yearOfDeath === undefined) {
            return ({name: obj.name, age: +year-obj.yearOfBirth,});
        } else {
            return ({name: obj.name, age: obj.yearOfDeath-obj.yearOfBirth,});
        }
    }).sort((a, b) => {return b.age-a.age;});

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
