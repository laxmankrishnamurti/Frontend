// Duck / Structural Typing ::  If two objects have same properties and methods, TypeScript assumes that both are belongs to the same type.

interface ICredentials {
    username: string;
    password: string;
}

function login(credentials: ICredentials): ICredentials{
    console.log(credentials)
    return credentials
}

const user = {
    username: "Laxman krishnamurti",
    password: "85adsf58"
}

login(user) // No-error (Because TypeScript is treating it as it belongs to the ICredentials interface but that dosen't.)

/**
 * Interface with properties and methods
 */

interface IAuth {
    username: string;
    password: string;
    login(username: string, password: string): void;
}

const user1 = {
    username: "Kawya Krishnamurti",
    password: "kawya@123",
    login(username: string, password: string){
        console.log("username is : ", username)
        console.log("password is : ", password)
    }
}

/**
 * Inference :: If we do not declare type definition of an varibale, TypeScript will assign a type to the variable. This is called Inference. 
 */

let age = 21; // let age: number
let username = "Laxman Krishnamurti" // let username: string