const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: 'Niccolo',
  cities: ['Los Angeles', 'New York', 'Honolulu'],
  printplacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city + '!');
  }
};

console.log(user.printplacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * multiplier.multiplyBy);
  }
};

console.log(multiplier.multiply());
