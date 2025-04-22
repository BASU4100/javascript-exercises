const palindromes = function (stringValue) {
    stringValue = stringValue.replace(/[^a-z0-9]/gi,"").toLowerCase();
    let l = 0;
    let u = stringValue.length-1;
    console.log(stringValue);
    while (l<u) {
        if (stringValue[l++] === stringValue[u--])
            continue;
        else
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
