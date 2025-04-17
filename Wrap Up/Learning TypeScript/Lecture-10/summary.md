# Lecture-10

- Think about the scenario where there are ten functions or may be 20 functions and all of then needs to the same object type. Does it really worth it to define the object type in the all functions parameter?

Abviously not.

To solve that particular problem "Type Aliasses" came into picture.

- Type Aliasses :: This is like a schema for all functions. What we do is we simply pass it's referece like a default type as we define for a normal variable.

```javascript
type User = {
  name: string,
  age: number,
  isActive: string,
};

function createUser(user: User): User {
  //operations

  return x;
}
```

Here, user type should be same as User. And the return type should adhere User object.
