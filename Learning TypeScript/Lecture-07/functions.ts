function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(2));

function getUpper(value: string) {
  return value.toUpperCase();
}

console.log(getUpper("TypeScript"));

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

//Default Parameters

function addTwoNumbers(num1: number, num2: number = 1) {
  return num1 + num2;
}

const resultOfAddTwoNumbers = addTwoNumbers(4);
console.log("resultOfAddTwoNumbers : ", resultOfAddTwoNumbers);

//Taking number type but returning a string value

function getMultiple(num) {
  return "Completed";
}

let multipleResult = getMultiple(2);
console.log(multipleResult);
