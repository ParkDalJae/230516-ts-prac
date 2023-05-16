const a = 1;
const b = 2;

function exampleOne(object: Record<string, string>) {
  let value: string[] = [];
  for (let key in object) {
    value.push(object[key]);
  }
  return value;
}

let test = {
  name: "DalJse",
  age: "20",
  job: "minam",
};

console.log(exampleOne(test));
