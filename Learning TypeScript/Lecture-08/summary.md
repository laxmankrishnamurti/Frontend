## Functions

- Privent functions to return a strictly typed value

```TypeScript
function addTwo(num: number): number {
  return "Welcome";     //Swiggly line
}

const addTwoResult = addTwo(4);
console.log("addTwoResult :: ", addTwoResult);

function addTwo(num: number): number {
  return num + 2;     //Swiggly line
}

const addTwoResult = addTwo(4);
console.log("addTwoResult :: ", addTwoResult);

```

- Returning multiple types value from a function

```TypeScript
function getValue(num: number): boolean or string(Confusing-> lets disscuss further) {
  if (num > 5) {
    return true;
  }

  return "200 Ok";
}
```

```TypeScript

//Arrow - Function

const getUsername = (name: string): string => {
  return name;
};

console.log("username is : ", getUsername("Laxman Krshnamurti"));
```

```TypeScript

//Handling errors

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

consoleError("Filed to fetch user data");

```

- :void :: Function is not going to return any value

```TypeScript

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

console.log(handleError("Failed to reach that site"));

```

- :never :: The never type represents vlaues which are never observed. In a return type, this means that the function thow an exception or terminates execution of the program. This is very close to the void but this is not exactly same.
