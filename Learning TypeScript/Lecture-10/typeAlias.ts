type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): User {
  console.log("newUser name : ", user.name);
  console.log("newUser age : ", user.age);
  console.log("account status active/inactive : ", user.isActive);

  const createdUser = {
    name: user.name,
    age: user.age,
    isActive: user.isActive,
  };

  return createdUser;
}

function updateUser(user: User) {}

//............n functions
