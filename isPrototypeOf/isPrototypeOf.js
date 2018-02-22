 function isPrototypeOf (prototype, object) {
  var getObjectPrototype = Object.getPrototypeOf(object);

  if (typeof prototype === null || typeof prototype === 'undefined' || typeof prototype !== 'object') {
    throw new TypeError('Arguments cannot be undefined or null.');
  }

  if (typeof object === null || typeof object === 'undefined') {
    throw new TypeError('Arguments cannot be undefined or null.');
  }

  while (getObjectPrototype !== null) {
    if (getObjectPrototype === prototype) {
      return true;
    }
      getObjectPrototype = Object.getPrototypeOf(getObjectPrototype);
  }
  return false;
}
