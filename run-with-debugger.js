function runWithDebuggerES5(callback, array){
  debugger;
  callback.apply(this, array);
}

function runWithDebuggerES6(callback, array){
  debugger;
  callback(...array);
}

// Tests
function sayFullName(first,last) {
  console.log(first + ' ' + last);
}

function sayHiTo(name) {
	console.log('hi ' + name);
}

function say123(one, two, three){
  console.log(one + ' ' + two + ' ' + three);
}

runWithDebuggerES5(sayHiTo, ['gordon','zhu'])
runWithDebuggerES5(sayFullName, ['gordon','zhu'])
runWithDebuggerES5(say123, ['One','Two','Three'])
runWithDebuggerES6(sayHiTo, ['gordon','zhu'])
runWithDebuggerES6(sayFullName, ['gordon','zhu'])
runWithDebuggerES6(say123, ['One','Two','Three'])
