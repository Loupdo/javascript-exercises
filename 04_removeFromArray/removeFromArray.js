const removeFromArray = function(array, element1, element2) {
    let newArray=[]
for (let i=0; i< array.length; i++){
    if((array[i] !== element1) && (array[i] !== element2)) {
        newArray.push(array[i])
    }
}
return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
