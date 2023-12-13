const repeatString = function (string, num) {
    newString = ""
    if (num < 0) {
        newString = "ERROR";
        return newString
    }
    for (let i = 0; i < num; i += 1) {
        newString += string;
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
