## Functions

Nothing too much just simply focus on assigning types of the parameter so that no value have any type.

```TypeScript
function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(2));

```

```TypeScript

function getUpper(value: string) {
  return value.toUpperCase();
}

console.log(getUpper("TypeScript"));

```

```TypeScript

function signIn(name: string, email: string, isPaid: boolean) {
  console.log("name :: ", name);
  console.log("emaiil :: ", email);
  console.log("isPaid :: ", isPaid);
  return {
    status: 200,
    msg: "User signin successfully",
  };
}

const result = signIn(
  "Laxman Krishnamurti",
  "laxmankrishnamurti@gmail.com",
  false
);
console.log("result :: ", result);
```

```TypeScript
//Taking number type but returning a string value

function getMultiple(num) {
  return "Completed";
}

let multipleResult = getMultiple(2);
console.log(multipleResult);

```
