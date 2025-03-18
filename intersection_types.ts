type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
  name: "Alice",
  age: 28,
  id: 2,
  title: "Manager",
};
