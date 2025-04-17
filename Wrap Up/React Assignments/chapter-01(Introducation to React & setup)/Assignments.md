## Assignment-01 :: If we delete node_modules. How to run our app again successfully ?

Run the command

```javascript
$ npm i
```

It will install all packages that is required to run the app and specially the node_modules file.

## Assignment-02 :: How to remove double "console.logs" from React ?

In React, seeing <code>console.log</code> prints twice is because of <code>React.StrictMode</code>.

In React, when we use <code>React.StrictMode</code> it will intentionally double-invoke some lifecycle methods to identify potential bugs during development mode. Although, it will not needed to remove in real life because when we build our application to take one step further means in Production it will not print twice.

If we do not want to console twice then we can simple remove the <code>React.StrictMode</code>.

## Assignment-03 :: Create a Page with multiple React Apps. Both React Apps should be independent of each other.

## Assignment-04 :: Try to build a react app using other toolchains like Vite.

Ans :- Assignment-03 & -04 on the "assignment" directory
