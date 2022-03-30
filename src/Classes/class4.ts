abstract class Persons {
  abstract name: string;
  code: string;
  constructor(code: string) {
    this.code = code;
  }
  getName(): void {
    console.log(`Name: ${this.name}`);
  }
  abstract find(name: string): Persons;
}

class Employees extends Persons {
  age: number;
  name: string;
  constructor(name: string, age: number, code: string) {
    super(code);
    this.name = name;
    this.age = age;
  }
  find(name: string): Persons {
    return new Employees('John', 22, '1');
  }
}
let emp: Persons = new Employees('James', 10, '2');
emp.getName(); //James

let emp2: Persons = emp.find('John');
console.log(emp2);
