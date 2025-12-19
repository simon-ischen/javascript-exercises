const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let joined = "";
    for (let i = 0; i < num; i++) {
        joined = joined.concat(string);
    }
    return joined;
};

// Do not edit below this line
module.exports = repeatString;
