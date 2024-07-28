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
