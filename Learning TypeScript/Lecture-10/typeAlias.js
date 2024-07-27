function createUser(user) {
    console.log("newUser name : ", user.name);
    console.log("newUser age : ", user.age);
    console.log("account status active/inactive : ", user.isActive);
    var createdUser = {
        name: user.name,
        age: user.age,
        isActive: user.isActive,
    };
    return createdUser;
}
function updateUser(user) { }
//............n functions
