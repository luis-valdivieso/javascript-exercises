const leapYears = function(year) {
  let leapYear = false;
  let divisibleByFour = year % 4 == 0;
  let isCentury = year % 100 == 0;
  let divisibleBy400 = year % 400 == 0;

  if((divisibleByFour && !isCentury)|| (isCentury && divisibleBy400)){
    leapYear = true;
  }
    
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
