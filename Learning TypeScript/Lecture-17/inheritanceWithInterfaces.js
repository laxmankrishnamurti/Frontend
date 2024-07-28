var Role;
(function (Role) {
    Role["normal"] = "NORMAL";
    Role["admin"] = "ADMIN";
})(Role || (Role = {}));
var user = {
    username: "Kawya Krishnamurti",
    age: 6,
    email: "kawyakrishnamurti@gmail.com",
    role: Role.normal,
};
console.log("user :: ", user);
var admin = {
    username: "Laxman Krishnamurti",
    age: 21,
    email: "laxmankrishnamurti@gmail.com",
    role: Role.admin,
};
console.log("admin :: ", admin);
