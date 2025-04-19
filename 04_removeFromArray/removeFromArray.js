const removeFromArray = function(arr, remove1, remove2, remove3, remove4) {
    let i = 0;
    while (i<arr.length)
        if (arr[i] === remove1 || arr[i] === remove2
            || arr[i] === remove3 || arr[i] === remove4)
            arr.splice(i, 1);
        else
            i++;
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
