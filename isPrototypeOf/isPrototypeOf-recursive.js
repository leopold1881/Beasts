
function isPrototypeOf (prototype, object) {

  if (typeof prototype === null || typeof prototype === 'undefined' || typeof prototype !== 'object') {
    throw new TypeError('Arguments cannot be undefined or null.');
  }

  if (typeof object === null || typeof object === 'undefined') {
    throw new TypeError('Arguments cannot be undefined or null.');
  }

 /**
  * Base case:
  * Check if object reaches to the end of the prototype chain with no matches
  */
  if (object === null) {
    return false;
  }

/**
  * Recursive case:
  * Check if prototype is indeed a prototype of the object
  */
  if (prototype === Object.getPrototypeOf(object)){
    return true;
  } else {
    return isPrototypeOf (prototype, Object.getPrototypeOf(object));
  }

}
