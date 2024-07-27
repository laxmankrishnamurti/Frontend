# Lecture-04

## Type's in TypeScript?

There are lots of types are available in TypeSript. List of some types which is given below:-

Note :- All are in lowercase

- number
- string
- boolean
- null
- undefined
- void
- object
- array
- tuples
- any (Natoriously famous for not being used)
- never
- unknown
  ................etc

  ## In which Situation TypeScript serves best?

To check whether a function is returning a valus is number or string or any specific data type that i want. Let say there is a function which takes two parameters and return it's sum value. We might be thinking that of course! that function must return a number type. But if this will not happen, then what next?

TypeScript helps us to get out from these types of situations.

## Syntax

```typescript
let variableName: type = value;
```

let say we declare a variable which is a string type value

```typescript
let greetings: string = "Hello TypeScript";
```

Once it declared with a type "string" it will not allow any other types value untill we don't change it's type. Like if we want to assign a boolen value into the variable TypeScript will prevent to do such type of actions.

And it will only show the built-in-methods that are releated to string.
