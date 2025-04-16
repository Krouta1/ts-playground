function printInfo<T>(x: T) {
  return x;
}

const str = printInfo<string>("Hello");
const num = printInfo<number>(42);
const bool = printInfo<boolean>(false);

function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
  { name: "buddy", breed: "Labrador" },
  { name: "default", breed: "unknown" }
);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}
