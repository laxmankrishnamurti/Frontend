# Lecture - 13

## Union

This is also a data type in TypeScript. We can use it when we don't know the value that is coming is either a numebr or string or any other data-type.

```typescript
sylbol -> |

let usreId: number | string;
```

It is not about to use the union type to choose either this one or this one. It is more about how efficiently we use this in our code that is really necessary.

```typescript
type User = {
  id: number | string;
};

function getDatabaseId(id: User) {
  // id.toUpperCase() //Error : property toUpperCase() does not exist on type user
  if (typeof id.id === "string") {
    id.id = id.id.toUpperCase();
  }
  return id;
}
const databaseIdValue = getDatabaseId({ id: "asdf" });
console.log("databaseIdValue is : ", databaseIdValue);

//Output : databaseIdValue is :  { id: 'ASDF' }
```

```typescript
//Let's do the same with array

const users: string[] = []; //all value should be type of string
const marks: number[] = []; //all value should be type of number
// const numbers: string | number[] = ["laxman"] //This is not like that, it should be in this format

const numbers: string[] | number[] = []; //values would be either number or string. We cannot store both of them into the array

//Let's store both of them

const mixedVlaues: (string | number)[] = ["laxman", 21];
```
