(function () {

  // Create an object to store the libraries
  var libraryStorage = {};

  function librarySystem (libraryName, otherLibraryNames, callback) {

    if (arguments.length > 1) {
      // Store everything into libraryStorage
      libraryStorage[libraryName] = {
        otherLibraries: otherLibraryNames,
        callback: callback,
        isStored: false
      };
    } else {
      return loadLibrary(libraryName);
    }
  }

  function loadLibrary (libraryName) {
    var dependency = [];
    var localLibraryStorage = libraryStorage[libraryName];

    // Check for missing libraries
    if(typeof localLibraryStorage === 'undefined'){
      throw new Error('One or more libraries are missing.')
    }

    // Check dependecy and extract data from it
    if (localLibraryStorage.otherLibraries) {
      dependency = localLibraryStorage.otherLibraries.map(function (value) {
        return loadLibrary(value);
      });

    // Check if library already exist
    if (localLibraryStorage.isStored) {
      return localLibraryStorage.result;
    }

    // Create library
    localLibraryStorage.result = localLibraryStorage.callback.apply(null, dependency);
    localLibraryStorage.isStored = true;
    return localLibraryStorage.result;

    }
  }
  // Attach librarySystem to the window
  window.librarySystem = librarySystem;

})();
