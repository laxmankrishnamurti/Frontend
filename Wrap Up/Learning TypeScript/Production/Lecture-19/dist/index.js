"use strict";
class User {
    constructor(username, age) {
        this.country = "India";
        this.username = username;
        this.age = age;
    }
}
const newUser = new User("Laxman Krishnamurti", 21);
console.log("newUser :: ", newUser);
console.log("Origin : ", newUser.country);
