"use strict";
class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
        this.secretNumber = 1;
    }
}
class Child extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeParentSecretNumber() {
        this.secretNumber = 10;
    }
}
const user = new User("Laxman Krishnamurti", 21);
console.log("user : ", user);
const child = new Child("Kawya Krishnamurti", 6);
console.log("child : ", child);
