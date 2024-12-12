const repeatString = function(string, num ) {
    let concatenatedString=""
    if (num<0){return "ERROR"}
    for(let i=0; i<num; i++){
        concatenatedString = concatenatedString + string
    }
    return  concatenatedString
};

// Do not edit below this line
module.exports = repeatString;
