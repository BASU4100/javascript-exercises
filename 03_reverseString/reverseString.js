const reverseString = function(straight) {
    let reverse = "";
    for (let i = 0; i<straight.length; i++)
        reverse = straight[i]+reverse;
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
