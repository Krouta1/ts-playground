type NewPerson = {
  firstName: string;
  readonly lastName: string;
  age?: number;
};

const person: NewPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 9,
};

// type reserver keyword i already did this in object lection
