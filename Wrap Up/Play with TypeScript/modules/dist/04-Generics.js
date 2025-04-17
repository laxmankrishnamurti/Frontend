"use strict";
// When i learn TypeScript first time one of the most difficult task for me is to understand what Generics are and how and when to use Generics. This has been slightly difficult task for me but let it go. Lets practice on Generics and understand the basics of it so that i can use it in very convinient way.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function logString(arg) {
    // console.log(arg)
    return arg;
}
logString('Pallavi jain');
function logNumber(arg) {
    // console.log(arg)
    return arg;
}
logNumber(2);
function logArray(arg) {
    // console.log(arg)
    return arg;
}
logArray(["Badminton", 4]);
//Note :: Try to not use type any because it breaks TypeScript principles. Only use it if it becomes necessary.
//Problem :: Redundency Problem and it is violating TypeScript and DRY(Do not repeat yourself) principles. Does there any way to create a logger that will log anything with type definition?
// Here comes, Generics.
/**
 * What are Generics?
 *
 * Generics in TypeScript are like placeholders or boxes that can hold any type of data. When we create something using generics, like a function or a class, we do not have to decide right away what type of data it will work with. Instead, we can decide later when we actually use it.
 *
 * This makes our code more flexible because it can work with many different types of data without being rewritten each time.
 *
 * So, this is the basic principle of using Generics in TypeScript.
 */
// Lets create a logger using Generics
function logger(arg) {
    // console.log(arg)
    return arg;
}
logger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
logger("Pallavi Jain");
logger(2);
logger(true);
function getOldAge(arg) {
    return arg.sort((a, b) => (b.age - a.age))[0];
}
const persons = [
    { age: 40 },
    { age: 30 },
    { age: 22 },
    { age: 14 },
    { age: 3 },
];
const oldAgePerson = getOldAge(persons);
console.log("Old age person : ", oldAgePerson.age); // Old age person : 40
const players = [
    { name: "Kawya Krishnamurti", age: 6 },
    { name: "Laxman Krishnamurti", age: 21 },
    { name: "Vikram Dhanush", age: 15 },
    { name: "Pallavi Jain", age: 6 },
];
const oldPlayerInfo = getOldAge(players);
// console.log("Old age player info : ", oldPlayerInfo.name)    // error, because the function is only returning an object which has type of HasAge interface.
console.log("Old age player info : ", oldPlayerInfo.age); // age : 21
// SOLUTION :: ASSERTION (Define explicitly that the returning object should have Player intterface type.)
const playerInfo = getOldAge(players);
console.log("Old player info : ", playerInfo); // { name: 'Laxman Krishnamurti', age: 21 }
// Note :- Explicit type definition is not a good practice (Double type declaration -> Type definition on a Type). So, does there any way to solve it without Assertion? YES -> GENERICS.
/**
 * GENERICS
 */
function getOldAgeInfo(arg) {
    return arg.sort((a, b) => (b.age - a.age))[0];
}
const oldPlayer = getOldAgeInfo(players);
console.log("oldPlayer : ", oldPlayer); // soldPlayer :  { name: 'Laxman Krishnamurti', age: 21 }
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://domain.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield fetchPostData('/posts');
    console.log(post);
    console.log(post[0].description);
    console.log(post[0].id);
    console.log(post[0].title);
}))();
const fetchUserData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://domain.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield fetchPostData('/users');
    console.log(users);
    console.log(users[0].id);
    console.log(users[0].title);
    console.log(users[0].description);
}))();
// PROBLEM :: REDUNDENCY (TOO MUCH REPETATION)
// SOLUTION :: INTRODUCING GENERCIS
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://domain.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchData('/posts');
    console.log(posts[0].description);
    console.log(posts[0].id);
    console.log(posts[0].title);
}))();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchData('/posts');
    console.log(posts[0].age);
    console.log(posts[0].id);
    console.log(posts[0].name);
}))();
// This is the concept that is used heavily in React Applications.
