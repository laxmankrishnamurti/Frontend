let userId: number = 234234;
// userId = "TypeScript"; //Type String is not assignable to type 'number'

let userAge = 21;
// userAge = "Laxman Krishnamurti"; //Type String is not assignable to type number (Automatically detected)

let isLoggedIn: boolean = false;
// isLoggedIn = 2; //Type number is not assignable to type boolean

let username = "Laxman Krishnamurti";
// username = 21; //Type number is not assignable to type string

console.log(isLoggedIn.valueOf()); //Output : false
