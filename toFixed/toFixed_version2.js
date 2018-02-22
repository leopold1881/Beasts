
function toFixed (value, precision) {

  var moveRight = Number(moveDecimal(value, precision));
  var rounded =  Math.round(moveRight);
  var moveLeft = moveDecimal(rounded, -precision);

  return moveLeft;

};


function moveDecimal (value, precision) {
  if (typeof value === 'number') {
    value = value.toString(10);
  }

  var decimalLocation;
  var arrayValue = value.split('');

  // Take out the decimal from the array
  if (arrayValue.indexOf('.') >= 0){
    decimalLocation = arrayValue.indexOf('.');
    arrayValue.splice(decimalLocation, 1);
  } else {
    decimalLocation = arrayValue.length;
  }

  var updatedDecimalLocation = decimalLocation + precision;

  /**
    * value | length | decimalLocation | precision | updated | value2 | length | decimalLocation2 | precision2 | updated
    * 1.005      4              1             2         3        101         3           3               -2          1
    * 0.615      4              1             2         3        62          2           2               -2          0
    * 1.5        2              1             4         5        15000       5           5               -4          1
    * 1.5        2              1             2         3        150         3           3               -2          1
    * 10.234     5              2             2         4        1023        4           4               -2          2
    * 10.234     5              2             0         2        10          2           2               -0          2
    */

  // Add trailing zeros
  if (arrayValue.length < updatedDecimalLocation) {
    let length = updatedDecimalLocation - arrayValue.length;
    for (let i = 0; i < length; i++ ) {
      arrayValue.push('0');
    }
  }

  // Add leading zeros
  if (updatedDecimalLocation <= 0) {
    let length = updatedDecimalLocation;
    for (let i = 0; i >= length; i--){
      arrayValue.unshift('0');
    }
    updatedDecimalLocation = arrayValue.length + precision;
  }

  // Insert decimal back into the array
  if (updatedDecimalLocation !== arrayValue.length){
    arrayValue.splice(updatedDecimalLocation, 0, '.');
  }

  return arrayValue.join('');
}
