function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper("TypeScript"));
function signIn(name, email, isPaid) {
    console.log("name :: ", name);
    console.log("emaiil :: ", email);
    console.log("isPaid :: ", isPaid);
    return {
        status: 200,
        msg: "User signin successfully",
    };
}
var result = signIn("Laxman Krishnamurti", "laxmankrishnamurti@gmail.com", false);
console.log("result :: ", result);
//Default Parameters
function addTwoNumbers(num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    return num1 + num2;
}
var resultOfAddTwoNumbers = addTwoNumbers(4);
console.log("resultOfAddTwoNumbers : ", resultOfAddTwoNumbers);
//Taking number type but returning a string value
function getMultiple(num) {
    return "Completed";
}
var multipleResult = getMultiple(2);
console.log(multipleResult);
