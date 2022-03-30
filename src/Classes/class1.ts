class Person {
  empFristName: string;
  empLastName: string;
  constructor(firstName: string, lastName: string) {
    this.empFristName = firstName;
    this.empLastName = lastName;
  }
}
class Employee extends Person {
  empCode: string;
   readonly birthDate: string;
  salary: number;
  tax:number;
  constructor(code: string,birthDate: string,firstName: string, lastName: string, salary:number,tax:number) {
    super(firstName, lastName);
    this.empCode = code;
    this.birthDate=birthDate;
    this.salary=salary
    this.tax=tax
  }
  getInfo(): string {
    return `Employee Code: ${this.empCode} full name: ${this.empFristName} ${this.empLastName} birth:${this.birthDate} salary: ${this.caculateSalary()} `;
  }
  getFullName(): void {
    console.log(`full name: ${this.empFristName} ${this.empLastName}`);

  }
  caculateSalary():number{
    return this.salary - this.salary*this.tax/100;
}
}
let employee1 = new Employee('DTT01','18-11-2000','John', 'Doe',10000000,20);
//employee1.birthDate= '1-1-2000'; Cannot assign to 'birthDate' because it is a read-only property
console.log(employee1.getInfo());
employee1.getFullName();
