const reverseString = function(string) {
    if (string=="") {
        return ""
    } else {
    return string.split("").reverse().join("")
}
};

// Do not edit below this line
module.exports = reverseString;
