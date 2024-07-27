const countries: string[] = [
  "India",
  "Pakistan",
  "Bangladesh",
  "China",
  "Russia",
  "Taiwan",
  "Japan",
  "Finland",
  "Ukraine",
  "Ujbekistan",
  "Iran",
  "Egypt",
  "Burundi",
  "Jojgiya",
  "Philipinse",
  "Isreal",
  "United arab amirat",
  "United kingdom",
];
console.log("countries by :string[] :: ", countries);

const countryList: Array<string> = [
  "India",
  "Pakistan",
  "Bangladesh",
  "China",
  "Russia",
  "Taiwan",
  "Japan",
  "Finland",
  "Ukraine",
  "Ujbekistan",
  "Iran",
  "Egypt",
  "Burundi",
  "Jojgiya",
  "Philipinse",
  "Isreal",
  "United arab amirat",
  "United kingdom",
];

console.log("countryList :Array<string> :: ", countryList);

//Both output is same

const marks: number[] = [95, 85, 92, 75, 81, 89];
console.log("marks :: ", marks);

//Array of an object

type UserType = {
  name: string;
  age: number;
  isActive: boolean;
};

const users: UserType[] = [];

users.push({
  name: "Laxman Krishnamurti",
  age: 21,
  isActive: false,
});

users.push({
  name: "Kawya Krishnamurti",
  age: 6,
  isActive: true,
});

users.push({
  name: "Pallavi Jain",
  age: 2,
  isActive: true,
});

console.log("all Users :: ", users);

/*
all Users ::  [
    { name: 'Laxman Krishnamurti', age: 21, isActive: false },
    { name: 'Kawya Krishnamurti', age: 6, isActive: true },
    { name: 'Pallavi Jain', age: 2, isActive: true }
  ]
*/

//Multidimensional array

const numbers: number[][] = [
  [255, 458, 754],
  [56, 245, 145],
  [124, 102, 150],
];

console.log("Multidimensional array of numbers are : ", numbers);

//Multidimensional array of numbers are :  [ [ 255, 458, 754 ], [ 56, 245, 145 ], [ 124, 102, 150 ] ]

//Let's try to make an array which is multidimensional array of object

type User = {
  name: {};
  age: number;
};

const usersList: User[] = [];

usersList.push({
  name: {
    firstName: "Laxman",
    lastName: "Krishnamurti",
  },
  age: 21,
});

usersList.push({
  name: {
    firstName: "Vikram",
    lastName: "Dhanush",
  },
  age: 13,
});

console.log("userList :: ", usersList);

/*
userList ::  [
    { name: { firstName: 'Laxman', lastName: 'Krishnamurti' }, age: 21 },
    { name: { firstName: 'Vikram', lastName: 'Dhanush' }, age: 13 }
  ]
*/
