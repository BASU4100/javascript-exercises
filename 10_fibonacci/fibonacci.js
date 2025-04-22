const fibonacci = function(num) {
    if (num<0)
        return "OOPS"
    let arr = [0, 1];
    let len = arr.length;
    if (+num+1<=len)
        return arr[+num];
    while (len!=+num+1) {
        len = arr.push(arr[len-1]+arr[len-2]);
    }
    return arr[len-1];
};

// Do not edit below this line
module.exports = fibonacci;
