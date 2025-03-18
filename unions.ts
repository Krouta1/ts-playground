let myVar: number | string;
myVar = "Petr";
myVar = 2;

type User = {
  name: string;
  age: number;
};

type UserInSystem = {
  id: number;
  title: string;
};

const user: User | UserInSystem = {
  name: "Alice",
  age: 28,
};
