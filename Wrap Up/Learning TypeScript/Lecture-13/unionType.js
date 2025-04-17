var userId;
userId = "laksdjf23lkj3slkj33434sdlk";
console.log("userId :: ", userId);
userId = 1;
console.log("userId :: ", userId);
function getDatabaseId(id) {
    // id.toUpperCase() //Error : property toUpperCase() does not exist on type user
    if (typeof id.id === "string") {
        id.id = id.id.toUpperCase();
    }
    return id;
}
var databaseIdValue = getDatabaseId({ id: "asdf" });
console.log("databaseIdValue is : ", databaseIdValue);
