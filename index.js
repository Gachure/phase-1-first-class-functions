// index.js
function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function namedFunction() {
      // function implementation
    };
  }
  function returnsAnAnonymousFunction() {
    return function () {
      // function implementation
    };
  }
  // export the functions if needed
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  