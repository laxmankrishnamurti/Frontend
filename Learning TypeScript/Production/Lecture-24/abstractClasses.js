var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getCameraMode = function () {
        return this.cameraMode;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getPickTiming = function () {
        //After doing complex computation
        return 1;
    };
    return Instagram;
}(TakePhoto));
var photo = new Instagram("Normal", "Original", 3);
console.log("photo :: ", photo);
//Output : photo ::  Instagram { cameraMode: 'Normal', filter: 'Original', burst: 3 }
var newPhoto = new Instagram("Advanced", "HighContrast", 60);
console.log("newPhoto :: ", newPhoto);
//Output : newPhoto ::  Instagram { cameraMode: 'Advanced', filter: 'HighContrast', burst: 60 }
console.log("getCameraMode by newPhoto :: ", newPhoto.getCameraMode());
console.log("getPickTiming by newPhoto :: ", newPhoto.getPickTiming());
