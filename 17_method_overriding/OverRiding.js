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
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log(this.name + " is moving at " + speed + " kmph!");
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes(name) {
        return _super.call(this, name) || this;
    }
    Mercedes.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        console.log("Mercedes started!");
        _super.prototype.run.call(this, speed);
    };
    return Mercedes;
}(Car));
var Honda = /** @class */ (function (_super) {
    __extends(Honda, _super);
    function Honda(name) {
        return _super.call(this, name) || this;
    }
    Honda.prototype.run = function (speed) {
        if (speed === void 0) { speed = 100; }
        console.log("Honda started!");
        _super.prototype.run.call(this, speed);
    };
    return Honda;
}(Car));
var mercedesObj = new Mercedes("Mercedes BoatTail");
var hondaObj = new Honda("City");
mercedesObj.run();
hondaObj.run();
