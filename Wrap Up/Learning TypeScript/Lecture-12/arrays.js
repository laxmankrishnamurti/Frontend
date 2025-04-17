var countries = [
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
var countryList = [
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
var marks = [95, 85, 92, 75, 81, 89];
console.log("marks :: ", marks);
var users = [];
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
var numbers = [
    [255, 458, 754],
    [56, 245, 145],
    [124, 102, 150],
];
console.log("Multidimensional array of numbers are : ", numbers);
var usersList = [];
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
