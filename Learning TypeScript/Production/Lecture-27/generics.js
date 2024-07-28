function connectToDatabase(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
var databaseInstance = connectToDatabase(10, {
    connection: "mongodb://127.0.0.23572/blog",
    username: "laxmankrishnamurti",
    password: "laxman",
});
console.log("databse instance :: ", databaseInstance);
