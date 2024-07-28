# Lecture - 18 (Production Set-Up)

- Step-01 :: Initialize TypeScript Config file

```javascript
tsc --init
```

- Step-02 :: Initialize node config file

```javascript
npm init -y
```

- Step-03 :: In Production we have two directory, they are :- (1)src (2)dist and also create a index.html file.

  - src :: Is a place where we write our application code
  - dist :: When we run the build command to get our application into production then all src file is being compiled and stored into the dist directory.

- tsconfig.json :: It will watch all TypeScript file and after running build command it will compile all the code and store it into it's output file location as we specified.

```TypeScript
"outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

All dist file is beinging automatically generated along with the same file name.

- Step04 :: Testing

```TypeScript

cd src
tsc -w

```
