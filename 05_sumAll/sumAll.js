const sumAll = function(start, end) {
    
    if (typeof end === 'string' || typeof start === 'string') {
       return 'ERROR';
    }

    if (isNaN(start) || isNaN(end)) {
        return 'ERROR'
    }

    if (start < 0 || end < 0) {
       return 'ERROR';
    }

    if (start > end) {
     end =[start, start = end][0];
    }
    
    let finalSum = 0;
    for (let i = start; i < end + 1; i++) {
        finalSum = finalSum + i;
    }
    return finalSum;
    
};
console.log(sumAll(5, 3));
// Do not edit below this line
module.exports = sumAll;
