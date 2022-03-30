abstract class Persons {
  abstract name: string;
  code: string;
  constructor(code: string) {
    this.code = code;
  }
  getName(): void {
    console.log(`Name: ${this.name}`);
  }
  abstract getInfo(): Persons;
}

class Employees extends Persons {
  age: number;
  name: string;
  constructor(name: string, age: number, code: string) {
    super(code);
    this.name = name;
    this.age = age;
  }
  getInfo(): Persons {
    return new Employees(this.name, this.age, this.code);
  }
}
let emp: Persons = new Employees('James', 10, '2');
console.log(emp.getInfo());
let emp2: Persons = new Employees('Jhon', 22, '1');
console.log(emp2.getInfo());
let emp3: Persons = new Employees('Steve', 30, '3');
console.log(emp3.getInfo());
