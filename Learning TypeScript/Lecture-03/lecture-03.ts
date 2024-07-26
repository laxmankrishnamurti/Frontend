console.log("Hello TypeScript!");

const user = {
  _id: Date.now(),
  name: "Laxman Krishnamurti",
  age: 21,
};
console.log("user : ", user); // user :  { _id: 1721977448902, name: 'Laxman Krishnamurti', age: 21 }
// console.log("user email is : ", user.email);

// error TS2339: Property 'email' does not exist on type '{ _id: number; name: string; age: number; }'. (While compiling TS to JS)
