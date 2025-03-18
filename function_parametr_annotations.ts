function addOne(num: number) {
  return num + 1;
}

const addThree = (num: number) => {
  return num + 3;
};

function addOneWithDefault(num: number = 0) {
  return num + 1;
}

const addThreeWithDefault = (num: number = 0) => {
  return num + 3;
};

function sayHello(name: string): string {
  return `Hello ${name}`;
}
