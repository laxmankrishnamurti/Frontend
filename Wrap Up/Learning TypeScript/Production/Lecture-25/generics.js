//Generic Functions
function identity(arg) {
    return arg;
}
var result1 = identity("Laxman Krishnamurti");
console.log(typeof result1); //Outpu : string
var result2 = identity(21);
console.log(typeof result2); //Output : number
//Generic Classes
var GenericClass = /** @class */ (function () {
    function GenericClass(initialVlaue, add) {
        this.initialValue = initialVlaue;
        this.add = add;
    }
    return GenericClass;
}());
var obj1 = new GenericClass("", function (num1, num2) { return num1 + num2; });
console.log(obj1.add("Hello, ", "Laxman"));
//Output: Hello, Laxman
var obj2 = new GenericClass(0, function (num1, num2) { return num1 + num2; });
console.log(obj2.add(10, 20));
function fetchIdentity(arg) {
    return arg;
}
var myIdentity = fetchIdentity;
var identityValue = myIdentity(10);
console.log("identityVlaue is : ", identityValue);
console.log("type of the identityVlaue is : ", typeof identityValue);
