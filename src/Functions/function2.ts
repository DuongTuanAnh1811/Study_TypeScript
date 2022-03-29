function Greet(greeting: string, ...names: string[]) {
  return greeting + ' ' + names.join(', ') + '!';
}
const Greet2 = (greeting: string, ...names: string[]) => {
  return greeting + ' ' + names.join(', ') + '!';
};

console.log(Greet('Hello', 'Steve', 'Bill'));
console.log(Greet2('Hi', 'Steve', 'Bill'));

const getSum = (...numbers: number[]) => {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
};
console.log(getSum(1, 22));
