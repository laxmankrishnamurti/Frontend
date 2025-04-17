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
