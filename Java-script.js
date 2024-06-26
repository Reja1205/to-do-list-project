let greet;
let isMorning = true;

let greet2 = function (name) {
  return `Good morning, ${name}!`;
};
if (isMorning) {
  greet = function (name) {
    // return `Good morning, ${name}!`;
    return name;
  };
} else {
  greet = function (name) {
    return `Hello, ${name}!`;
  };
}

const result = greet("Rejaur");
console.log(result);

console.log(greet2(result));
