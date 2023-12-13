const removeFromArray = function (arr, num) {
    for (let i = 0; i <= arr.length - 1; i += 1) {
        if (i + 1 == num) {
            arr.splice(i, 1);
        }
    } return arr
};

// Do not edit below this line
module.exports = removeFromArray;
