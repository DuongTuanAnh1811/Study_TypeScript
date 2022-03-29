let employeeName: string = 'John Smith';
let employeeDept: string = 'Finance';
let employeeDesc = `${employeeName} works in the ${employeeDept}`;
console.log(employeeDesc);

let str: string = 'Hello TypeScript';
console.log(str.charAt(2));
let str2: string = 'Tuan';
console.log(str.concat(' ', str2));
console.log(str.indexOf('H', 0));

let str3: string = ' Hello JavaScript';
let str4: string = 'TypeScript';

console.log(str3.replace('Java', 'Type'));
console.log(str3.replace('JavaScript', str4));

let str1: string = 'Apple, Banana, Orange';
console.log(str1.split(','));
