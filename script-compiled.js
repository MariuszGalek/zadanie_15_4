'use strict';

// TASK 1 //

var string1 = 'Hello';
var string2 = 'World!';

console.log(string1 + ' ' + string2);

// TASK 2 //

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(5));
console.log(multiply(2, 3));

// TASK 3 //

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (sum, next) {
    return sum + next;
  }) / args.length;
};

console.log(average(1, 10, 20, 20));
console.log(average(2, 4, 6));

// TASK 4 //

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// TASK 5 //

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];

console.log(firstname + ' ' + lastname);
