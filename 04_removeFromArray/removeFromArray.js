const removeFromArray = function(array, ...args) {
    
    let newArray = []

    array.forEach((element) => {
        if(!args.includes(element)) {
            newArray.push(element)
        }
    });

    return newArray
};

console.log(removeFromArray([1,2,3,4], 3))

// Do not edit below this line
module.exports = removeFromArray;
