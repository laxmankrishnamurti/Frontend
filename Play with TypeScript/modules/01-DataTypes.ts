// number
// string
// boolean
// array[]

// Type alias (used to create custom Types)
// User (First letter should be uppercase -> Naming convension)

type User = {
    name: string,
    age: number,
    email?: string, //Optional Property
    hobbies: Array<string>
}

// Type alias is like we are creating a blue-print for an object with its type definition. The object which is going to use Type Alias must have the defined properties of that alias. The object may have lots of properties and methods but the defined properties or methods must required in that object along with its type.

const user:User = {
    name: "Kawya Krishnamurti",
    age: 6,
    email: "kawyakrishnamurti@gmail.com",
    hobbies: ["Reading", "Wrestling"],
}


function login(userData: User):User {
    return userData
}

console.log(login(user))