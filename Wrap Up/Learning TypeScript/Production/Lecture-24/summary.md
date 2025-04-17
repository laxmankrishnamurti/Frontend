# Lecture - 24 (Abstrct Classes)

- <code>Abstract Class</code> : Abstract class are like a blue-print but the point is we cannot create an object using the class. There should be an extra class who is extending it and the class is responsible to create an object using the <code>abstract class.</code>

I could be little more confusing. But no needs to worry about that. Let's understand.

Let say we have to create five classes and their are some sort of similarity among all of them. Like - they could follow some basic structure. If it's tue then does it really make sense to define the same sort of structure/blue-print into all of them?

Abviously Not!

Instead of defining same sort of structure we can create a class that can be used for all classes. It is like a utility classes that can be used with any classes that needs some sort of similar structure and can prevent to write those structure again & again.

- Abstract classes can contain both abstract methods (methods without implementation) and non-abstract methods (methods with implementation).

```TypeScript

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

    //It's like a default feature but can be overridden by extended class as well.
  getCameraMode(): string {
    return this.cameraMode;
  }

  abstract getPickTiming(): number;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getPickTiming(): number {
    //After doing complex computation
    return 1;
  }
}

const photo = new Instagram("Normal", "Original", 3);
console.log("photo :: ", photo);

//Output : photo ::  Instagram { cameraMode: 'Normal', filter: 'Original', burst: 3 }

const newPhoto = new Instagram("Advanced", "HighContrast", 60);
console.log("newPhoto :: ", newPhoto);

//Output : newPhoto ::  Instagram { cameraMode: 'Advanced', filter: 'HighContrast', burst: 60 }

console.log("getCameraMode by newPhoto :: ", newPhoto.getCameraMode());
//Output : getCameraMode by newPhoto ::  Advanced

console.log("getPickTiming by newPhoto :: ", newPhoto.getPickTiming());
//Output : getPickTiming by newPhoto :: 1


```
