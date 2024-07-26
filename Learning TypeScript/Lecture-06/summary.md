## any - keyword

- We should avoid to use any-keyword as much as possible. Because, it turns off the type checking of that particular variable. So, if like that why we are using TypeScript!.

```typescript
let username; //Type of the variable is any.

function getUsername() {
  return "Laxman krishnamurti";
}

username = getUsername();

console.log("username : ", username);
```

Think about the scenario where the function is returning an boolean value but we only want string, It will mismatch and because of this our applcation may crashed.
