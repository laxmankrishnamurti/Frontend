//Generic Functions

function identity<type>(arg: type): type {
  return arg;
}

const result1 = identity<string>("Laxman Krishnamurti");
console.log(typeof result1); //Outpu : string

const result2 = identity<number>(21);
console.log(typeof result2); //Output : number

//Generic Classes

class GenericClass<type> {
  initialValue: type;
  add: (num1: type, num2: type) => type;

  constructor(initialVlaue: type, add: (num1: type, num2: type) => type) {
    this.initialValue = initialVlaue;
    this.add = add;
  }
}

const obj1 = new GenericClass<string>("", (num1, num2) => num1 + num2);
console.log(obj1.add("Hello, ", "Laxman"));

//Output: Hello, Laxman

const obj2 = new GenericClass<number>(0, (num1, num2) => num1 + num2);
console.log(obj2.add(10, 20));

//Output : 30

//Generic Interfaces

interface GenericIdentityInterface<type> {
  (arg: type): type;
}

function fetchIdentity<type>(arg: type): type {
  return arg;
}

const myIdentity: GenericIdentityInterface<number> = fetchIdentity;

const identityValue = myIdentity(10);
console.log("identityVlaue is : ", identityValue);
console.log("type of the identityVlaue is : ", typeof identityValue);

//Output : identityVlaue is :  10
//Output : type of the identityVlaue is :  number
