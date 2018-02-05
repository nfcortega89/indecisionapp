'use strict';

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

var user = {
  name: 'Niccolo',
  cities: ['Los Angeles', 'New York', 'Honolulu'],
  printplacesLived: function printplacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city + '!';
    });
  }
};

console.log(user.printplacesLived());

var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply: function multiply() {
    return this.numbers.map(function (number) {
      return number * multiplier.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
