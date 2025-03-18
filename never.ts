//USE FOR
// function that always throw an error
function throwError(msg: string): never {
  throw new Error(msg);
}

// function that has an infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// a variable that can never have a value
let x: never;

x = infiniteLoop();
