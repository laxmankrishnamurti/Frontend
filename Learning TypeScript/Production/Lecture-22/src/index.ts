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
