let employee: [number, string] = [1, 'John'];
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee[1]);
let person: [number, string, boolean] = [1, 'John', true];
person.push('Alice', 3, true);
console.log(person);
//Tuple Array
let employeeList: [number, string][];
employeeList = [employee, [2, 'Steve'], [3, 'Alice']];
console.log(employeeList);
