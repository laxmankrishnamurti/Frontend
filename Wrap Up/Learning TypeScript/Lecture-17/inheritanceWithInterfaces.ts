enum Role {
  "normal" = "NORMAL",
  "admin" = "ADMIN",
}

interface CreateUser {
  username: string;
  age: number;
  email: string;
  role: string;
}

const user: CreateUser = {
  username: "Kawya Krishnamurti",
  age: 6,
  email: "kawyakrishnamurti@gmail.com",
  role: Role.normal,
};

console.log("user :: ", user);

/*
user ::  {
  username: 'Kawya Krishnamurti',
  age: 6,
  email: 'kawyakrishnamurti@gmail.com',
  role: 'NORMAL'
}
  */

interface CreateAdmin extends CreateUser {}

const admin: CreateAdmin = {
  username: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
  role: Role.admin,
};

console.log("admin :: ", admin);

/*

admin ::  {
  username: 'Laxman Krishnamurti',
  age: 21,
  email: 'laxmankrishnamurti@gmail.com',
  role: 'ADMIN'
}

*/
