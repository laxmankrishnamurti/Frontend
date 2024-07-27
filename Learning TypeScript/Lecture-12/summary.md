# Lecture - 12

- Array Type Declaration

```typescript
const countries: string[] = [];

countries.push("India");
```

```typescript
const countryList: Array<string> = [];

countryList.push("India");
```

- Multi-dimensional array

```typescript
const numbers: number[][] = [];

numbers.push([10, 24, 54]);
```

- Multi-dimensional array object

```typescript
type User = {
  name: {};
  age: number;
};

const usersList: User[] = [];

usersList.push({
  name: {
    firstName: "Laxman",
    lastName: "Krishnamurti",
  },
  age: 21,
});

usersList.push({
  name: {
    firstName: "Vikram",
    lastName: "Dhanush",
  },
  age: 13,
});

console.log("userList :: ", usersList);

/*
userList ::  [
    { name: { firstName: 'Laxman', lastName: 'Krishnamurti' }, age: 21 },
    { name: { firstName: 'Vikram', lastName: 'Dhanush' }, age: 13 }
  ]
*/
```
