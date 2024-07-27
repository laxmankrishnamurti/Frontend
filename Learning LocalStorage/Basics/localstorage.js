console.log(window.localStorage)

//Remember : LocalStorage only deals with string. So, we have to store any value which is string or convert those value into string before pushing into LocalStorage

//Storing values into localstorage

let username = 'Laxman Krishnamurti'
localStorage.setItem("username", username)

let userAge = 21;
localStorage.setItem("userAge", userAge)

//Fetching the stored vlaue from the localstorage

let getUsername = localStorage.getItem("username")
console.log("fetched username is : ", getUsername)

let getUserage = localStorage.getItem("userAge")
console.log("fetched userAGe is : ", getUserage)

//Let's store an object into the localstorage

let userinfo = {
    username: "Kawya Krishnamurti",
    age: 6,
    email: "kawyakrishnamurti@gmail.com"
}

localStorage.setItem("userInfo", JSON.stringify(userinfo))

//fetch the userinfo value
let getUserinfo = localStorage.getItem("userInfo")
console.log("getUserinfo : ", getUserinfo)

//{"username":"Kawya Krishnamurti","age":6,"email":"kawyakrishnamurti@gmail.com"}

console.log(typeof (getUserinfo))   //Output : string

//So, we have to convert it into object back by using parse which is pre-built in JSON.

let getUserinfoValue = JSON.parse(getUserinfo)
console.log(typeof (getUserinfoValue))      //Output : object

//Let's try to store an array into it.

let countries = ["India", "Pakistan", "Shrilanka", "Bangladesh", "Myanmar", "China", "Russia", "Japan", "Taiwan", "South Korea", "North Korea", "Philipinse", "Indonesia", "Thailand", "Ukraine", "Isreal", "Egypt", "Iran", "Irak", "Afganistan", "United arab of emirates", "Kuwait", "United kingdom", "France", "Tanjaniya", "Burundi", "Newzeland", "Tibbat", "Australiya", "United states of america", "Germany", "Jordan"]

localStorage.setItem("countries", JSON.stringify(countries))

let getCountries = JSON.parse(localStorage.getItem("countries"))
console.log(typeof (getCountries))  //Output : Object
console.log(Array.isArray(getCountries))        //Output : true

console.log(getCountries[4])        //Output : Myanmar
console.log(getCountries[20])       //Output : United states of emirates