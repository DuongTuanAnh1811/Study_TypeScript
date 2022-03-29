function sayHello() {
  console.log('Hello TypeScript');
}
const Print = () => console.log('Hello TypeScript');
Print();
sayHello();
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3));

function getLength1(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
const getLength2 = (numberList: number[] = []) => {
  return Array.isArray(numberList) ? numberList.length : 0;
};

console.log(getLength1());
console.log(getLength2());
