# Lecture - 31 (Final step of Narrowing)

```TypeScript

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "Square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  //   return shape.side * shape.side;
}

//Exhaustive checks

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "Square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.width * shape.height;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
```
