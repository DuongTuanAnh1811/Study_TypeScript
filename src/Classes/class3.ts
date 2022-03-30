class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(speed: number = 0): void {
    console.log(`A ${this.name} is moving at ${speed} `);
  }
}
class Honda extends Car {
  constructor(name: string) {
    super(name);
  }
  run(speed: number = 100): void {
    console.log('A Honda');
    super.run(speed);
  }
}
class Mercedes extends Car {
  constructor(name: string) {
    super(name);
  }
  run(speed: number = 150): void {
    console.log('A Mercedes ');
    super.run(speed);
  }
}

let honda = new Honda('Camry');
honda.run();
let mercedes = new Mercedes('Mercedes-Benz GLA');
mercedes.run();
