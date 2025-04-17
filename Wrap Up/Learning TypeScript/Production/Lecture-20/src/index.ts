// class User {
//   username: string;
//   age: number;
//   readonly country = "India";
//   constructor(username: string, age: number) {
//     this.username = username;
//     this.age = age;
//   }
// }

// const newUser = new User("Laxman Krishnamurti", 21);
// console.log("newUser :: ", newUser);
// console.log("Origin : ", newUser.country);

// class User {
//   private static instanceCount = 0;
//   readonly country = "India";

//   constructor(public username: string, public age: number) {
//     User.incrementInstanceCount();
//   }

//   private static incrementInstanceCount() {
//     User.instanceCount++;
//   }

//   public static getTotalInstanceCount(): number {
//     return User.instanceCount;
//   }
// }

// const newUser = new User("Laxman Krishnamurti", 21);
// const newUser2 = new User("Kawya Krishnamurti", 6);
// const newUser3 = new User("Vikram Kumar", 12);

// console.log("Total user created  :: ", User.getTotalInstanceCount());

//Let's track which use called the private method with their name

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
