# TypeScript

# Lecture - 01

# Lecture-02

## What TypeScript does?

Static Checking

# Lecture-03

## Installation Process

- 1. Install Node and Latest version of NPM.
- 2.

```javascript
npm install -g typescript
```

- 3. Verify/Check Version of TypeScript

```javascript
tsc --version
```

### Key-Points

- If we directly push TypeScript code into production it will not going to work. It should compile first and converted into JavaScript format and then we can use it. We already know that TypeScript is just for safety checking for JavaScript code.

# Lecture-04

## Type's in TypeScript?

There are lots of types are available in TypeSript. List of some types which is given below:-

Note :- All are in lowercase

- number
- string
- boolean
- null
- undefined
- void
- object
- array
- tuples
- any (Natoriously famous for not being used)
- never
- unknown
  ................etc

  ## In which Situation TypeScript serves best?

To check whether a function is returning a valus is number or string or any specific data type that i want. Let say there is a function which takes two parameters and return it's sum value. We might be thinking that of course! that function must return a number type. But if this will not happen, then what next?

TypeScript helps us to get out from these types of situations.

## Syntax

```typescript
let variableName: type = value;
```

let say we declare a variable which is a string type value

```typescript
let greetings: string = "Hello TypeScript";
```

Once it declared with a type "string" it will not allow any other types value untill we don't change it's type. Like if we want to assign a boolen value into the variable TypeScript will prevent to do such type of actions.

And it will only show the built-in-methods that are releated to string.

# Lecture-05

## number & boolean

- Type Inference :: Actually, we don't need to write variable type number, boolean again & again if we are initialize it's value on declaration time. TypeScript is enough smart to detected the type of the variable, doing this can be overwhelming.

- The syntax of colon boolean, number is a TypeScript syntax so whenever a JavaScript compiled file is going to come in it's never going to be a colon or the value.

- To be more precise, we shouldn't be doing too much obviouos thing, yes there is a special place where we can use it, but not everywhere.

# Lecture-06

## any - keyword

- We should avoid to use any-keyword as much as possible. Because, it turns off the type checking of that particular variable. So, if like that why we are using TypeScript!.

```typescript
let username; //Type of the variable is any.

function getUsername() {
  return "Laxman krishnamurti";
}

username = getUsername();

console.log("username : ", username);
```

Think about the scenario where the function is returning an boolean value but we only want string, It will mismatch and because of this our applcation may crashed.

# Lecture-07

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

# Lecture-08

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

# Lecture - 09

- If we think by adding TypeScript as layer on top of JavaScript that we can removed all bad behavior of JavaScipt then we are wrong that is not the case.

It might continue with the higher version of TypeScript. Does it really hard to remove all bad behaviors of JavaScript?

Unfortunetally yes! Because if we really understand how JavaScript works under the hood then we will understand why it is hard to do so.

# Lecture-10

- Think about the scenario where there are ten functions or may be 20 functions and all of then needs to the same object type. Does it really worth it to define the object type in the all functions parameter?

Abviously not.

To solve that particular problem "Type Aliasses" came into picture.

- Type Aliasses :: This is like a schema for all functions. What we do is we simply pass it's referece like a default type as we define for a normal variable.

```javascript
type User = {
  name: string,
  age: number,
  isActive: string,
};

function createUser(user: User): User {
  //operations

  return x;
}
```

Here, user type should be same as User. And the return type should adhere User object.

# Lecture - 11

- readonly keyword :: It is used make an object key static means it's value only for reading no one can change it's value
- ? keyword :: It's like to set an optional key.
- & keyword :: It is used to combine multiple types of object into a single object.

# Lecture - 12

- Array Type Declaration

```typescript
const countries: string[] = [];

countries.push("India");
```

```typescript
const countryList: Array<string> = [];

countryList.push("India");
```

- Multi-dimensional array

```typescript
const numbers: number[][] = [];

numbers.push([10, 24, 54]);
```

- Multi-dimensional array object

```typescript
type User = {
  name: {};
  age: number;
};

const usersList: User[] = [];

usersList.push({
  name: {
    firstName: "Laxman",
    lastName: "Krishnamurti",
  },
  age: 21,
});

usersList.push({
  name: {
    firstName: "Vikram",
    lastName: "Dhanush",
  },
  age: 13,
});

console.log("userList :: ", usersList);

/*
userList ::  [
    { name: { firstName: 'Laxman', lastName: 'Krishnamurti' }, age: 21 },
    { name: { firstName: 'Vikram', lastName: 'Dhanush' }, age: 13 }
  ]
*/
```

# Lecture - 13

## Union

This is also a data type in TypeScript. We can use it when we don't know the value that is coming is either a numebr or string or any other data-type.

```typescript
sylbol -> |

let usreId: number | string;
```

It is not about to use the union type to choose either this one or this one. It is more about how efficiently we use this in our code that is really necessary.

```typescript
type User = {
  id: number | string;
};

function getDatabaseId(id: User) {
  // id.toUpperCase() //Error : property toUpperCase() does not exist on type user
  if (typeof id.id === "string") {
    id.id = id.id.toUpperCase();
  }
  return id;
}
const databaseIdValue = getDatabaseId({ id: "asdf" });
console.log("databaseIdValue is : ", databaseIdValue);

//Output : databaseIdValue is :  { id: 'ASDF' }
```

```typescript
//Let's do the same with array

const users: string[] = []; //all value should be type of string
const marks: number[] = []; //all value should be type of number
// const numbers: string | number[] = ["laxman"] //This is not like that, it should be in this format

const numbers: string[] | number[] = []; //values would be either number or string. We cannot store both of them into the array

//Let's store both of them

const mixedVlaues: (string | number)[] = ["laxman", 21];
```

# Lecture - 14 (Tuples)

- Tuples :: A broader perspactive Tuples are just an array not an array but a special type of array becasue it can manage array's element position to be in an order that is defined in the type schema.

```TypeScript
const users: [number, string] = [1, "Pallavi Jain"]
const users: [number, string] = ["Pallavi Jain",1]  //Throw an error
```

[https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array]

# Lectue - 15 (enums)

- enum :: enums are used to restrict user's choice.

```TypeScript
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;
```

After Compilation process the JS file looks like

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
  SeatChoice[(SeatChoice["AISLE"] = 0)] = "AISLE";
  SeatChoice[(SeatChoice["MIDDLE"] = 1)] = "MIDDLE";
  SeatChoice[(SeatChoice["WINDOW"] = 2)] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.WINDOW;
```

This is a debaratble topic that does it really make sense to produce that much line of JS code? But, however we can overcome this by just adding a keyword into the enum

```TypeScript
cosnt enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mySeat = SeatChoice.WINDOW;
```

//Output of the code

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mySeat = 2; /* SeatChoice.WINDOW */
```

# Lecture - 16 (Interfaces)

- Interface :: Interface means we don't care about what is happening under the hood. It means interface provides a layer of abstraction.

```TypeScript
interface User {
  readonly databaseId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

const newUser: User = {
  databaseId: 2312234,
  email: "laxmankrishnamurti@gmail.com",
  userId: 293848,
  googleId: "3klj3lkj345kj",
  startTrial: function () {
    return "Trial started";
  },
  getCoupon: function (name, value) {
    console.log("Coupon name is : ", name);
    console.log("Coupon value is : ", value);
    return 10;
  },
};

console.log("newUser :: ", newUser);
newUser.getCoupon("DISCOUNT50", 50);

/*
newUser ::  {
  databaseId: 2312234,
  email: 'laxmankrishnamurti@gmail.com',
  userId: 293848,
  googleId: '3klj3lkj345kj',
  startTrial: [Function: startTrial],
  getCoupon: [Function: getCoupon]
}


Coupon name is :  DISCOUNT50
Coupon value is :  50
*/

```

# Lecture - 17 (Re-Opening the Interface)

- Re-Opening Interface :: It allow us to add an extra field into the interface without changing it. Means we can create an interface that is similar to the previous one and add an extra values that is not added previously becuase of some reson. It may be like the data has been some other modules and the module is not currently available to put that value. Once the value get available then we can simply re-open the interface and put that value and it will sync with the other values.

```TypeScript
interface User {
  readonly databaseId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

//Let's reopen the interface

interface User {
  githubToken: string;
}

const newUser: User = {
  databaseId: 2312234,
  email: "laxmankrishnamurti@gmail.com",
  userId: 293848,
  githubToken: "git@laxmn&&000",
  googleId: "3klj3lkj345kj",
  startTrial: function () {
    return "Trial started";
  },
  getCoupon: function (name, value) {
    console.log("Coupon name is : ", name);
    console.log("Coupon value is : ", value);
    return 10;
  },
};

console.log("newUser :: ", newUser);
newUser.getCoupon("DISCOUNT50", 50);

/*
 newUser ::  {
  databaseId: 2312234,
  email: 'laxmankrishnamurti@gmail.com',
  userId: 293848,
  githubToken: 'git@laxmn&&000',
  googleId: '3klj3lkj345kj',
  startTrial: [Function: startTrial],
  getCoupon: [Function: getCoupon]
}
Coupon name is :  DISCOUNT50
Coupon value is :  50
  */


```

- Inheritance :: Interfaces can inherit other interfaces.

```TypeScript

enum Role {
  "normal" = "NORMAL",
  "admin" = "ADMIN",
}

interface CreateUser {
  username: string;
  age: number;
  email: string;
  role: string;
}

const user: CreateUser = {
  username: "Kawya Krishnamurti",
  age: 6,
  email: "kawyakrishnamurti@gmail.com",
  role: Role.normal,
};

console.log("user :: ", user);

/*
user ::  {
  username: 'Kawya Krishnamurti',
  age: 6,
  email: 'kawyakrishnamurti@gmail.com',
  role: 'NORMAL'
}
  */

interface CreateAdmin extends CreateUser {}

const admin: CreateAdmin = {
  username: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
  role: Role.admin,
};

console.log("admin :: ", admin);

/*

admin ::  {
  username: 'Laxman Krishnamurti',
  age: 21,
  email: 'laxmankrishnamurti@gmail.com',
  role: 'ADMIN'
}

*/


```

# Lecture - 18 (Production Set-Up)

- Step-01 :: Initialize TypeScript Config file

```javascript
tsc --init
```

- Step-02 :: Initialize node config file

```javascript
npm init -y
```

- Step-03 :: In Production we have two directory, they are :- (1)src (2)dist and also create a index.html file.

  - src :: Is a place where we write our application code
  - dist :: When we run the build command to get our application into production then all src file is being compiled and stored into the dist directory.

- tsconfig.json :: It will watch all TypeScript file and after running build command it will compile all the code and store it into it's output file location as we specified.

```TypeScript
"outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

All dist file is beinging automatically generated along with the same file name.

- Step04 :: Testing

```TypeScript

cd src
tsc -w

```

By running this command it will keep watching all TypeScript file that is in the <code>src</code> directory and it will compile the code into JavaScript and stored it into the output path location as we set into the tsconfig.json file.

# Lecture - 19 (Classes in TypeScript)

- It goes same as JavaScript but the difference is that we have to aware TypeScript to all properties that is going to be created.

```TypeScript

class User {
  username: string;
  age: number;
  readonly country = "India";
  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
}

const newUser = new User("Laxman Krishnamurti", 21);
console.log("newUser :: ", newUser);
console.log("Origin : ", newUser.country);

```

If i will try to change the country value it will prevent to produce JavaScript file.

```TypeScript

newUser.country = "Australia"

```

- If we try to change something in the compiled JavaScript file it will keep remain same when the TypeScript file is being compiled. Hence, we can change the JS file for a while but not like Permanently.

- This is the Power of TypeScript.

# Lecture - 20 (Type Modifier)

- <code>public</code> :: sets properties as public that is accessable by the object

- <code>private</code> :: sets properties as private that is only accessable by the Class itself. We cannot access it outside of the class.

  - Note :: There is no <code>private</code> keyword is available in JavaScript world. Instead of this there will be a <code>#</code> symbol that is used to mark a property as private.

```TypeScript

//Short-cut way to create classes in TypeScript

class User {
  private static instanceCount = 0;
  readonly country = "India";

  constructor(public username: string, public age: number) {
    User.incrementInstanceCount();
  }

  private static incrementInstanceCount() {
    User.instanceCount++;
  }

  public static getTotalInstanceCount(): number {
    return User.instanceCount;
  }
}

const newUser = new User("Laxman Krishnamurti", 21);
const newUser2 = new User("Kawya Krishnamurti", 6);
const newUser3 = new User("Vikram Kumar", 12);

console.log("Total user created  :: ", User.getTotalInstanceCount());

```

```TypeScript
//Let's track which user called the private method with their name

class User {
  private static instanceCount = 0;
  readonly country = "India";
  private whoCallPrivateMethod: string;

  constructor(public username: string, public age: number) {
    User.incrementInstanceCount();
    this.whoCallPrivateMethod = username;
  }

  private static incrementInstanceCount() {
    User.instanceCount++;
  }

  public static getTotalInstanceCount(): number {
    return User.instanceCount;
  }

  private privateMethod() {
    console.log(`Private method is called by : ${this.whoCallPrivateMethod}`);
  }

  public callPrivateMethod() {
    this.privateMethod();
  }
}

const newUser = new User("Laxman Krishnamurti", 21);
const newUser2 = new User("Kawya Krishnamurti", 6);
const newUser3 = new User("Vikram Kumar", 12);
const newUser4 = new User("Fruti Kumari", 17);
const newUser5 = new User("Anjali Kumari", 19);

console.log("Total user created  :: ", User.getTotalInstanceCount());

newUser3.callPrivateMethod(); //Output : Private method is called by : Vikram Kumar
newUser.callPrivateMethod(); //Output : Private method is called by : Laxman Krishnamurti
```

```JavaScript

//Compiled JavaScript code of the above code

class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
        this.country = "India";
        User.incrementInstanceCount();
        this.whoCallPrivateMethod = username;
    }
    static incrementInstanceCount() {
        User.instanceCount++;
    }
    static getTotalInstanceCount() {
        return User.instanceCount;
    }
    privateMethod() {
        console.log(`Private method is called by : ${this.whoCallPrivateMethod}`);
    }
    callPrivateMethod() {
        this.privateMethod();
    }
}
User.instanceCount = 0;
const newUser = new User("Laxman Krishnamurti", 21);
const newUser2 = new User("Kawya Krishnamurti", 6);
const newUser3 = new User("Vikram Kumar", 12);
const newUser4 = new User("Fruti Kumari", 17);
const newUser5 = new User("Anjali Kumari", 19);
console.log("Total user created  :: ", User.getTotalInstanceCount());
newUser3.callPrivateMethod(); //Output : Private method is called by : Vikram Kumar
newUser.callPrivateMethod(); //Output : Private method is called by : Laxman Krishnamurti

```

# Lecture - 21 (Getter and Setter)

- <code>getter</code> & <code>setter</code> gives us more control aceess of object properties. It could be either public or private property.

- If we set a getter method to a property it dosen't mean that we much have to set a setter method for these property.
- In TypeScript, setter should not have any return type value.

To be more precise both are used to perform an operation on any object property. Let's understand

They allow us to validate and control access to the properties of an object. By using getters and setters, we can ensure that the properties of an object are always in a valid state. However, their purpose is not limited to validation. Here are some key points about getters and setters:

- <b>Validation</b> : We can validate incoming property values before setting them.
- <b>Encapsulation</b > : They allow us to hide the internal representation of a property and expose it in a controlled manner.
- <b>Computed Properties</b> : We can compute and return a value dynamically when a property is accessed.
- <b>Side Effects</b> : We can execute additional code when a property is set or accessed, such as logging or updating other properties.

```TypeScript

class User {
  private static _totalInstance = 0;
  constructor(
    public username: string,
    public email: string,
    public age: number
  ) {
    User.increaseInstance();
  }

  private static increaseInstance() {
    User._totalInstance += 1;
  }

  public getTotalInstance(): number {
    return User._totalInstance;
  }

  get currentEmail(): string {
    return this.email;
  }

  set newEmail(email: string) {
    this.email = `UserClass${email}`;
  }
}

const user = new User(
  "Laxman Krishnamurti",
  "laxmankrishnamurti@gmail.com",
  21
);

console.log("user : ", user);
console.log("totalInstace of the User class is : ", user.getTotalInstance()); //Output : 1
console.log(user.currentEmail);

user.newEmail = "laxmankrishnamurti@gmail.com";
console.log("updated Email with some prefixes is : ", user.currentEmail);

//Output : updated Email with some prefixes is :  UserClasslaxmankrishnamurti@gmail.com

```

# Lecture - 22 (Protected - Access Modifier)

- <code>protected</code> :: It allow us to access a praticular property with in the class itself and also it allows to use that property in other class as well if the class extends it's class.

```TypeScript

class User {
  protected secretNumber = 1;
  constructor(public username: string, public age: number) {}
}

class Child extends User {
  isFamily: boolean = true;
  changeParentSecretNumber() {
    this.secretNumber = 10;
  }
}

const user = new User("Laxman Krishnamurti", 21);
console.log("user : ", user);

const child = new Child("Kawya Krishnamurti", 6);
console.log("child : ", child);

```

# Lecture - 23 (Initerfaces)

- <code>interface</code> : Just for understanding purpose, we can call it as a protocol. So, if there is class that is trying to use that interface, it must should adhere interface protocol.

Or Like a Guidline

TypeScript - Purpose :: Getting less error having more consistency in the JavaScript.

```TypeScript

interface Takephoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): string;
}

class Instagram implements Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements Takephoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): string {
    return "Story has been created";
  }
}

```

The class that uses a interface must pass the require parameters. It can pass more parameters but not less as it has required to use that interface protocol.

- <code>implements - Keyword</code> : Used by class if it wants to use an interface(Guidlines/Protocols)

# Lecture - 24 (Abstrct Classes)

- <code>Abstract Class</code> : Abstract class are like a blue-print but the point is we cannot create an object using the class. There should be an extra class who is extending it and the class is responsible to create an object using the <code>abstract class.</code>

I could be little more confusing. But no needs to worry about that. Let's understand.

Let say we have to create five classes and their are some sort of similarity among all of them. Like - they could follow some basic structure. If it's tue then does it really make sense to define the same sort of structure/blue-print into all of them?

Abviously Not!

Instead of defining same sort of structure we can create a class that can be used for all classes. It is like a utility classes that can be used with any classes that needs some sort of similar structure and can prevent to write those structure again & again.

- Abstract classes can contain both abstract methods (methods without implementation) and non-abstract methods (methods with implementation).

```TypeScript

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

    //It's like a default feature but can be overridden by extended class as well.
  getCameraMode(): string {
    return this.cameraMode;
  }

  abstract getPickTiming(): number;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getPickTiming(): number {
    //After doing complex computation
    return 1;
  }
}

const photo = new Instagram("Normal", "Original", 3);
console.log("photo :: ", photo);

//Output : photo ::  Instagram { cameraMode: 'Normal', filter: 'Original', burst: 3 }

const newPhoto = new Instagram("Advanced", "HighContrast", 60);
console.log("newPhoto :: ", newPhoto);

//Output : newPhoto ::  Instagram { cameraMode: 'Advanced', filter: 'HighContrast', burst: 60 }

console.log("getCameraMode by newPhoto :: ", newPhoto.getCameraMode());
//Output : getCameraMode by newPhoto ::  Advanced

console.log("getPickTiming by newPhoto :: ", newPhoto.getPickTiming());
//Output : getPickTiming by newPhoto :: 1


```

# Lecture - 25 (Generics)

- <code>Generics</code> : Generics in TypeScript provide a way to create reusable and flexible components that work with various types while maintaining type safety. They allow you to define classes, interfaces, and functions with a placeholder type, which can be specified when the component is used.

```TypeScript
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
```

# Lecture - 26 (Generic Array)

```TypeScript

function getSearchProducts<type>(products: type): type {
  //do some database operations
  const productIndex = 4;
  return products[productIndex];
}

//Convert this into an arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const productIndex = 45;
  return products[productIndex];
};


```

# Lecture - 27 (Generics)

```TypeScript

interface Database {
  connection: string;
  username: string;
  password: string;
}

function connectToDatabase<T, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}

const databaseInstance = connectToDatabase(10, {
  connection: "mongodb://127.0.0.23572/blog",
  username: "laxmankrishnamurti",
  password: "laxman",
});

console.log("databse instance :: ", databaseInstance);

/*
atabse instance ::  {
  valOne: 10,
  valTwo: {
    connection: 'mongodb://127.0.0.23572/blog',
    username: 'laxmankrishnamurti',
    password: 'laxman'
  }
}
 */

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}


```

# Lecture - 28 (Narrowing | Type detection)

```TypeScript

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log("s : ", s);
      }
    } else if (typeof strs === "string") {
      console.log("strs: ", strs);
    }
  }
}

//We should not do such kind of things.

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toUpperCase();
}

```

# Lecture - 29 (Narrowing)

```TypeScript

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }

  return false;
}


```

# Lecture - 30 (instanceOf narrowing)

```TypeScript

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Type Predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

/*
function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined
}

//It dosen't mean that it will return the type of Fish or Bird. It just simply returning a boolean value. So, TypeScript is still in confusion that what is the type of pet, whether it is Fish or Bird
*/

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; //At this point TypeScript is 100% sure that the type of pet is should be Fish.
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}


```

# Lecture - 31 (Final step of Narrowing)

```TypeScript

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "Square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  //   return shape.side * shape.side;
}

//Exhaustive checks

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "Square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.width * shape.height;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
```

# The END (Basics of TypeScript)
