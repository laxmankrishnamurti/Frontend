"use strict";
//Object Literal
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Laxman Krishnamurti",
    age: 21,
    email: "laxmankrishnamurti@gmail.com",
    isActive: true,
};
//Function that takes an object and prevent it's default behavior
function getUser(_a) {
    var string = _a.name, number = _a.age;
    var user = {
        username: this.name, //Error : Cannot read properties of undefined(reading 'name')
        userage: this.age, //Error: Cannot read properties of undefined(reading 'age')
    };
    return user;
}
// getUser(); //An argument matching this binding pattern was not provided.
// let user = getUser({ name: "Harshad", age: 23 });
// console.log("user :: ", user);
/**
 * This function will always take an object as an argument and it's corresponding values
 */
//Let's create a function that will ensure that it should always return an object value.
function getObjValue() {
    var usreInfo = {
        name: "Harshad Mehta",
        age: 23,
    };
    return usreInfo;
}
var returnValue = getObjValue();
console.log("returnValue : ", returnValue); //returnValue :  { name: 'Harshad Mehta', age: 23 }
//Let's try to return with extra values
function returnUser() {
    var user = {
        name: "Sonu Kumar",
        age: 17,
        email: "sonukumar@gmail.com",
    };
    return user;
}
console.log("returnedUser value is :: ", returnUser()); //returnedUser value is ::  { name: 'Sonu Kumar', age: 17, email: 'sonukumar@gmail.com' }
//It means it can return an object with extra key-value pairs that is not defined in the object type. It obvious that it can prevent me to pass any other value except an object. But think about the scenario where we are padding an object with extra values that is not defined in their type.
function handleInputUser(_a) {
    var string = _a.name, number = _a.age;
}
// handleInputUser({
//   name: "Kawya Krishnamurti",
//   age: 6,
//   email: "kawyakrishnamurti@gmail.com",
// });
//Error : Object literal may not specify known properties, and email does not exist in the type
//But let me show you something
var userInfo = {
    name: "Kawya Krishnamurti",
    age: 6,
    email: "kawyakrishnamurti@gmail.com",
};
//let me pass the userInfo into the handleInputUser function
handleInputUser(userInfo);
