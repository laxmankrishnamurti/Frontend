# Lecture - 27 (Generics)

```TypeScript

interface Database {
  connection: string;
  username: string;
  password: string;
}

function connectToDatabase<T, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}

const databaseInstance = connectToDatabase(10, {
  connection: "mongodb://127.0.0.23572/blog",
  username: "laxmankrishnamurti",
  password: "laxman",
});

console.log("databse instance :: ", databaseInstance);

/*
atabse instance ::  {
  valOne: 10,
  valTwo: {
    connection: 'mongodb://127.0.0.23572/blog',
    username: 'laxmankrishnamurti',
    password: 'laxman'
  }
}
 */

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}


```
