class Person {
  public first: string;
  private second: string; // only inside class
  protected prot_age: number;
  constructor(first: string, second: string, prot_age: number) {
    this.first = first;
    this.second = second;
    this.prot_age = prot_age;
  }

  getName(): string {
    return `${this.first} ${this.second}`;
  }
}

let p1 = new Person("John", "Doe", 42);
console.log(p1);
