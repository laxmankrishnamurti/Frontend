// When i learn TypeScript first time one of the most difficult task for me is to understand what Generics are and how and when to use Generics. This has been slightly difficult task for me but let it go. Lets practice on Generics and understand the basics of it so that i can use it in very convinient way.
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
    return arg.sort(function (a, b) { return (b.age - a.age); })[0];
}
var persons = [
    { age: 40 },
    { age: 30 },
    { age: 22 },
    { age: 14 },
    { age: 3 },
];
var oldAgePerson = getOldAge(persons);
console.log("Old age person : ", oldAgePerson.age); // Old age person : 40
var players = [
    { name: "Kawya Krishnamurti", age: 6 },
    { name: "Laxman Krishnamurti", age: 21 },
    { name: "Vikram Dhanush", age: 15 },
    { name: "Pallavi Jain", age: 6 },
];
var oldPlayerInfo = getOldAge(players);
// console.log("Old age player info : ", oldPlayerInfo.name)    // error, because the function is only returning an object which has type of HasAge interface.
console.log("Old age player info : ", oldPlayerInfo.age); // age : 21
// SOLUTION :: ASSERTION (Define explicitly that the returning object should have Player intterface type.)
var playerInfo = getOldAge(players);
console.log("Old player info : ", playerInfo);
