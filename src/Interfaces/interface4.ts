interface NumList {
  [index: number]: number;
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);
interface IStringList {
  [index: string]: string;
}

let strArr: IStringList = {};
strArr['TS'] = 'TypeScript';
strArr['JS'] = 'JavaScript';
console.log(strArr);
