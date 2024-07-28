# Lecture - 28 (Narrowing | Type detection)

```TypeScript

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log("s : ", s);
      }
    } else if (typeof strs === "string") {
      console.log("strs: ", strs);
    }
  }
}

//We should not do such kind of things.

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toUpperCase();
}

```
