let userId: number | string;

userId = "laksdjf23lkj3slkj33434sdlk";
console.log("userId :: ", userId);

//Output : userId ::  laksdjf23lkj3slkj33434sdlk

userId = 1;
console.log("userId :: ", userId);

//Output : userId ::  1

type User = {
  id: number | string;
};

function getDatabaseId(id: User) {
  // id.toUpperCase() //Error : property toUpperCase() does not exist on type user
  if (typeof id.id === "string") {
    id.id = id.id.toUpperCase();
  }
  return id;
}
const databaseIdValue = getDatabaseId({ id: "asdf" });
console.log("databaseIdValue is : ", databaseIdValue);

//Output : databaseIdValue is :  { id: 'ASDF' }

//Let's do the same with array

const users: string[] = []; //all value should be type of string
const marks: number[] = []; //all value should be type of number
// const numbers: string | number[] = ["laxman"] //This is not like that, it should be in this format

const numbers: string[] | number[] = []; //values would be either number or string. We cannot store both of them into the array

//Let's store both of them

const mixedVlaues: (string | number)[] = ["laxman", 21];

//Literal Type of Assignment

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "window";
// seatAllotment = "crew"; //Error : Type "crew" is not assignable to type "aisle" | "middle" | "window"
