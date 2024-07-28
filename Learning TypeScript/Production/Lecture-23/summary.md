# Lecture - 23 (Initerfaces)

- <code>interface</code> : Just for understanding purpose, we can call it as a protocol. So, if there is class that is trying to use that interface, it must should adhere interface protocol.

```TypeScript

interface Takephoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): string;
}

class Instagram implements Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements Takephoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): string {
    return "Story has been created";
  }
}

```

The class that uses a interface must pass the require parameters. It can pass more parameters but not less as it has required to use that interface protocol.
