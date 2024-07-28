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
