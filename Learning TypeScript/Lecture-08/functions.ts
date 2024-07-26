function addTwo(num: number): number {
  return num + 2;
}

const addTwoResult = addTwo(4);
console.log("addTwoResult :: ", addTwoResult);

//Returning multiple types value from a function

function getValue(num: number) {
  if (num > 5) {
    return true;
  }

  return "200 Ok";
}

//Arrow - Function

const getUsername = (name: string): string => {
  return name;
};

console.log("username is : ", getUsername("Laxman Krshnamurti"));

//Array

const heros = [
  "Bhagat Singh",
  "Raj Guru",
  "Chandra Shekhar Aazad",
  "Batukeshwar dutt",
  "Bishimillah Khan",
  "Kalpana dutt",
  "Priti lta wadedar",
  "Shanti Ghosh",
];

let hero = heros.map((hero): string => {
  return hero;
});

console.log("hero :: ", hero);

//Handling errors

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

consoleError("Filed to fetch user data");

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

console.log(handleError("Failed to reach that site"));

export {};
