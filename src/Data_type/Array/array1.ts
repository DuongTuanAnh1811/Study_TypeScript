//let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
//let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values[2]);
console.log(fruits[0]);
for (let value of values) {
  console.log(value);
}
for (let key in values) {
  console.log(key);
}
for (let fruit of fruits) {
  console.log(fruit);
}
