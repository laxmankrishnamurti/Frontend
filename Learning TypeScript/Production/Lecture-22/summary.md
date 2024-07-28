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
