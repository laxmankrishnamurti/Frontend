"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var addTwoResult = addTwo(4);
console.log("addTwoResult :: ", addTwoResult);
//Returning multiple types value from a function
function getValue(num) {
    if (num > 5) {
        return true;
    }
    return "200 Ok";
}
//Arrow - Function
var getUsername = function (name) {
    return name;
};
console.log("username is : ", getUsername("Laxman Krshnamurti"));
//Array
var heros = [
    "Bhagat Singh",
    "Raj Guru",
    "Chandra Shekhar Aazad",
    "Batukeshwar dutt",
    "Bishimillah Khan",
    "Kalpana dutt",
    "Priti lta wadedar",
    "Shanti Ghosh",
];
var hero = heros.map(function (hero) {
    return hero;
});
console.log("hero :: ", hero);
//Handling errors
function consoleError(errMsg) {
    console.log(errMsg);
}
consoleError("Filed to fetch user data");
function handleError(errmsg) {
    throw new Error(errmsg);
}
console.log(handleError("Failed to reach that site"));
