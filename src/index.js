module.exports = function toReadable (number) {
    
  let strNumber = number + '';
  let result = '';

  const numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
  const twentys = 'teen';
  // const hundreds = 'hundred';
  
  if(strNumber.length === 3) {
    result += numberArr[+strNumber[0]] + 'hundred';
    strNumber = strNumber.slice(0);
  }

  if(+strNumber > 15) {
    if(strNumber.length === 2) {
      result += numberArr[+strNumber[0]] + 'teen';
      strNumber = strNumber.slice(0);
    }
  } else result += 
}
