abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  getCameraMode(): string {
    //It's like a default feature but can be overridden by extended class as well.
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
