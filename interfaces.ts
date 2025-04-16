interface Vehicle {
  start(): void;
  stop(): void;
  name: string;
}

class Car implements Vehicle {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  start(): void {
    console.log("Car started");
  }

  stop(): void {
    console.log("Car stopped");
  }
}

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(2, 3)); // Output: 5

interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello ${person.name}`);
  person.sayHello();
}

interface Truck extends Vehicle {
  type: string;
}

const bigTruck: Truck = {
  name: "TT",
  type: " so big truck",
  start(): void {
    console.log("Truck started");
  },
  stop(): void {
    console.log("Truck stopped");
  },
};
