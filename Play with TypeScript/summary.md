# Play with TypeScript

TypeScript :: Programming Language(A superset of JavaScript)
TypeScript :: TypeScript is JavaScript with syntax for types.

## Why TypeScript?

- Avoid bugs in development
- Increase development speed
- Additional features(Adds on JavaScript)

## How does it work?

We can not use TypeScript in production. We write TypeScript and then we compile it to convert it into JavaScript format so that we can use it into production. Once the code is compiled the JavaScript file will not change untill we make some changes in the TypeScript file and then compile it again.

One of the biggest reason of why do we not use TypeScript in production is "JavaScript does not have type support".

## Installation

```bash
$ sudo apt-get update
$ sudo apt-get install -y nodejs npm
$ npm install -g typescript
$ tsc --help
$ tsc --version
```

## Compile a TypeScript file.

```bash
$ tsc <file_name>
```

<code>tsc :: Compile the current project</code>
