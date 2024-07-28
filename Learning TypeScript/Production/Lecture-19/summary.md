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
