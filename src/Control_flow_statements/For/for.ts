let arrNumber: number[] = [2, 3, 67, 22, 11, 9, 1];
// arrNumber = arrNumber.map((value, index) => value * 2);
// console.log(arrNumber);
const getDoubleArr = (arr: number[]): number[]=> {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};
console.log(getDoubleArr(arrNumber));

for (const key in arrNumber) {
  console.log(arrNumber[key]);
}

for (const value of arrNumber) {
  console.log(value);
}
