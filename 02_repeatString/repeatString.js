const repeatString = function(word, count) {
    if (count < 0)
        return "ERROR";
    let str = "";
    for (let i = 0; i<count; i++)
        str += word;
    return str;
};

// Do not edit below this line
module.exports = repeatString;
