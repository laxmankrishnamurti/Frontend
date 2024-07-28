# Lecture - 20 (Type Modifier)

- <code>public</code> :: sets properties as public that is accessable by the object

- <code>private</code> :: sets properties as private that is only accessable by the Class itself.

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
