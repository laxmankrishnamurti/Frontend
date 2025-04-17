"use strict";
class User {
    constructor(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
        User.increaseInstance();
    }
    static increaseInstance() {
        User._totalInstance += 1;
    }
    getTotalInstance() {
        return User._totalInstance;
    }
    get currentEmail() {
        return this.email;
    }
    set newEmail(email) {
        this.email = `UserClass${email}`;
    }
}
User._totalInstance = 0;
const user = new User("Laxman Krishnamurti", "laxmankrishnamurti@gmail.com", 21);
console.log("user : ", user);
console.log("totalInstace of the User class is : ", user.getTotalInstance()); //Output : 1
console.log(user.currentEmail);
user.newEmail = "laxmankrishnamurti@gmail.com";
console.log("updated Email with some prefixes is : ", user.currentEmail);
//Output : updated Email with some prefixes is :  UserClasslaxmankrishnamurti@gmail.com
