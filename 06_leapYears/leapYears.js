const leapYears = function() {

    let isLeapYr = 1985;
    // let notLeapYr = ;

    if(isLeapYr % 400 && isLeapYr % 4){
        return true
    } else{
        return false
    }
};

leapYears()

// Do not edit below this line
module.exports = leapYears;
