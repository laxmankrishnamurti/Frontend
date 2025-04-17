// When i learn TypeScript first time one of the most difficult task for me is to understand what Generics are and how and when to use Generics. This has been slightly difficult task for me but let it go. Lets practice on Generics and understand the basics of it so that i can use it in very convinient way.

function logString(arg: string){
    // console.log(arg)
    return arg
}

logString('Pallavi jain')

function logNumber(arg: number){
    // console.log(arg)
    return arg
}

logNumber(2)

function logArray(arg: any[]){
    // console.log(arg)
    return arg
}

logArray(["Badminton", 4])

//Note :: Try to not use type any because it breaks TypeScript principles. Only use it if it becomes necessary.

//Problem :: Redundency Problem and it is violating TypeScript and DRY(Do not repeat yourself) principles. Does there any way to create a logger that will log anything with type definition?

// Here comes, Generics.

/**
 * What are Generics?
 * 
 * Generics in TypeScript are like placeholders or boxes that can hold any type of data. When we create something using generics, like a function or a class, we do not have to decide right away what type of data it will work with. Instead, we can decide later when we actually use it.
 * 
 * This makes our code more flexible because it can work with many different types of data without being rewritten each time.
 * 
 * So, this is the basic principle of using Generics in TypeScript.
 */

// Lets create a logger using Generics

function logger<T>(arg: T): T {
    // console.log(arg)
    return arg
}

logger([1,2,3,4,5,6,7,8,9,10])
logger("Pallavi Jain")
logger(2)
logger(true)

// Lets take a better example

interface HasAge{
    age: number;
}

function getOldAge(arg: HasAge[]): HasAge {
    return arg.sort((a, b) => (b.age - a.age))[0];
}

const persons = [
    {age: 40},
    {age: 30},
    {age: 22},
    {age: 14},
    {age: 3},
]

const oldAgePerson = getOldAge(persons)
console.log("Old age person : ", oldAgePerson.age ) // Old age person : 40

// Lets create an another interface an try it with the above function

interface Player {
    name: string;
    age: number;
}

const players: Player[] = [
    {name: "Kawya Krishnamurti", age: 6},
    {name: "Laxman Krishnamurti", age: 21},
    {name: "Vikram Dhanush", age: 15},
    {name: "Pallavi Jain", age: 6},
]

const oldPlayerInfo = getOldAge(players)
// console.log("Old age player info : ", oldPlayerInfo.name)    // error, because the function is only returning an object which has type of HasAge interface.

console.log("Old age player info : ", oldPlayerInfo.age) // age : 21

// SOLUTION :: ASSERTION (Define explicitly that the returning object should have Player intterface type.)

const playerInfo = getOldAge(players) as Player
console.log("Old player info : ", playerInfo) // { name: 'Laxman Krishnamurti', age: 21 }

// Note :- Explicit type definition is not a good practice (Double type declaration -> Type definition on a Type). So, does there any way to solve it without Assertion? YES -> GENERICS.

/**
 * GENERICS 
 */

function getOldAgeInfo<T extends HasAge>(arg: T[]): T{
    return arg.sort((a,b) => (b.age - a.age))[0];
}   

const oldPlayer = getOldAgeInfo(players)
console.log("oldPlayer : ", oldPlayer) // soldPlayer :  { name: 'Laxman Krishnamurti', age: 21 }

/**
 * REAL WORLD PROJECT EXAMPLE   :: On frontend we create lots of function to make a server request to fetch data. Lets create a generic function that can used as a Utility function to make a server request.
 */

interface IPost {
    title: string;
    id: number;
    description: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response = await fetch(`https://domain.com${path}`)
    return response.json();
}

(
    async () => {
        const post = await fetchPostData('/posts')
        console.log(post)
        console.log(post[0].description)
        console.log(post[0].id)
        console.log(post[0].title)
    }
)();

interface IUser {
    id: number;
    name: string;
    age: number;
}

const fetchUserData = async (path: string): Promise<IUser[]> => {
    const response = await fetch(`https://domain.com${path}`)
    return response.json();
}

(
    async () => {
        const users = await fetchPostData('/users')
        console.log(users)
        console.log(users[0].id)
        console.log(users[0].title)
        console.log(users[0].description)
    }
)();

// PROBLEM :: REDUNDENCY (TOO MUCH REPETATION)
// SOLUTION :: INTRODUCING GENERCIS

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`https://domain.com${path}`)
    return response.json()
}

(
    async () => {
        const posts = await fetchData<IPost[]>('/posts')
        console.log(posts[0].description)
        console.log(posts[0].id)
        console.log(posts[0].title)
    }
)();

(
    async () => {
        const posts = await fetchData<IUser[]>('/posts')
        console.log(posts[0].age)
        console.log(posts[0].id)
        console.log(posts[0].name)
    }
)();

// This is the concept that is used heavily in React Applications.