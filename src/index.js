module.exports = function toReadable (number) {
    
  let strNumber = number + '';
  let result = '';

  const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const exceptionsNumberArr = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    18: 'eighteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    80: 'eighty'
  }

  function getException(num) {
    let res = '';

    if(num < 11) {
      res = numberArr[num];
      return res;
    } else if (exceptionsNumberArr[num]) {
      res = exceptionsNumberArr[num];
      return res;
    }
  }

  function getTeens(num) {
    let res = '';
    let numStr = num + '';

    res = numberArr[+numStr[1]] + 'teen';
    return res;
  }

  function getTwentys(num) {
    let res = '';
    let numStr = num + '';
    let dec = getException(+(numStr[0] + '0'))

    if (dec && +numStr[1] === 0) {
      return res = dec;
    } else if (dec && +numStr[1] !== 0) {
      res = dec + ' ' + numberArr[+numStr[1]];
      return res;
    } else if (!(num % 10)) {
      res = numberArr[+numStr[0]] + 'ty';
      return res;
    } else {
      res = numberArr[+numStr[0]] + 'ty' + ' ' + numberArr[+numStr[1]];
      return res;
    }
  }

  function getHundred(num) {
    let res = '';
    let numStr = num + '';
    
    res = numberArr[+numStr[0]] + ' hundred'

    if(!(+numStr % 10) && +numStr[1] === 0) {
      return res;
    }
    numStr = numStr.slice(1);

    return res += ' ' + toReadable(+numStr);
  }

  if(getException(number)) {
    return getException(number);
  } else if (number < 20) {
    return getTeens(number);
  } else if (number < 100) {
    return getTwentys(number);
  } else return getHundred(number);

}