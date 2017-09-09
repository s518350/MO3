/**
 * @MO3.js 
 * The starting file for 44-563 M03 exercise.
 * 
 * Complete this code so all QUnit tests pass. 
 * A JS object is a set of key-value pairs, more like a dictionary in other languages.

 * In JS, every function gets an array-like arguments object as a local variable.
 * The number of arguments is given by arguments.length. 
 * Each argument can be processed in a a for loop
 * or by using the (zero-based) index, e.g., arguments[0].
 */

// Wait, why is there no parameter? You don't need
// it ... when you invoke max() with a series of
// numbers, they are automagically embedded into
// a local arguments object.
function max() {
  var max = -Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error('The given argument is not a number');
  }
  return number % 2 !== 0;
}

function sortObj(array) {
  array.sort(function (a, b) {
    var date1 = new Date(a.timestamp).getTime();
    var date2 = new Date(b.timestamp).getTime();

    if (date1 < date2) {
      return -1;
    } else if (date1 === date2) {
      return 0;
    } else {
      return 1;
    }
  });
}

/**
 * Calculates the result of raising a base number 
 * to an exponent power. 

 * @param {Number} base - the number to be raised to a power
 * @param {Number} power - the exponent used to raise the base
 * @return {Number} pow - the result of multiplying base the power number of times
 */
function pow(base, power) {
  var output = 1;
  for (var i = 0; i < power; i++) {
    output *= base;
  }
  return output;
}

/**
* Calculates the result of adding a series of numbers.
*
* @param {...number} var_args - an unlimited set of numbers to add
* @return {Number} sum - result of adding each argument provided
*/
function sum() {
  var output = 0;
  for (var i = 0; i < arguments.length; i++) {
    output += arguments[i];
  }
  return output;
}


