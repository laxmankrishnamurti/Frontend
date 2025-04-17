# Lecture - 26 (Generic Array)

```TypeScript

function getSearchProducts<type>(products: type): type {
  //do some database operations
  const productIndex = 4;
  return products[productIndex];
}

//Convert this into an arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const productIndex = 45;
  return products[productIndex];
};


```
