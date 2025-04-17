# Lecture - 30 (instanceOf narrowing)

```TypeScript

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Type Predicates

type Fish = { swim: () => void };
type Bird = { fly: () => void };

/*
function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined
}

//It dosen't mean that it will return the type of Fish or Bird. It just simply returning a boolean value. So, TypeScript is still in confusion that what is the type of pet, whether it is Fish or Bird
*/

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; //At this point TypeScript is 100% sure that the type of pet is should be Fish.
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}


```
