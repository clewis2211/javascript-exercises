const sumAll = function() {

    let array = [1, 2, 3, 4]
    let sum = 0;

    for(let i = 0; i < array.length; i++){
         sum += array[i]
    }

    return sum
};

sumAll()
// Do not edit below this line
module.exports = sumAll;
