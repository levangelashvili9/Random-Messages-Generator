// GENERATES RANDOM NUMBER, PARAMETER NUM IS FOR TAKE LENGTH OF AN ARRAY
const randNumber = (num) => {
  return Math.floor(Math.random() * num);
};

// STRINGS WE WILL ITERATE THROUGH
const randomIdeas = {
  Addition: ["1 + 3 = 4", "4 + 7 = 11", "9 + 5 = 14", "3 + 6 = 9"],
  Subtraction: ["7 - 3 = 4", "9 - 7 = 2", "13 - 4 = 9", "3 - 6 = -3"],
  Multiplication: ["2 * 3 = 6", "4 * 5 = 20", "9 * 1 = 9", "7 * 6 = 42"],
};

// WE WILL ADD STRINGS TO THAT ARRAY
const output = [];

// FUCTION THAT ITERATES THROUGH "randomIdeas" OBJECT
for (let message in randomIdeas) {
  let number = randNumber(randomIdeas[message].length);

  // ADD STRINGS TO 'output' ARRAY
  switch (message) {
    case "Addition":
      output.push(`${message}: ${randomIdeas[message][number]}`);
      break;
    case "Subtraction":
      output.push(`${message}: ${randomIdeas[message][number]}`);
      break;
    case "Multiplication":
      output.push(`${message}: ${randomIdeas[message][number]}`);
      break;
    default:
      output.push(`oops, something went wrong`);
  }
}

console.log(output);
