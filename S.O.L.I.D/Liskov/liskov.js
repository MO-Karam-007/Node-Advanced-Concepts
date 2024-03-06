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
var BaseShape = /** @class */ (function () {
    function BaseShape(type) {
        this.type = type;
    }
    return BaseShape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(lenth) {
        var _this = _super.call(this, 'Square') || this;
        _this.lenth = lenth;
        return _this;
    }
    Square.prototype.GetArea = function () {
        if (this.lenth < 0) {
            throw new Error('Negative number is not accepted');
        }
        return Math.pow(this.lenth, 2);
    };
    return Square;
}(BaseShape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(lenth, width) {
        var _this = _super.call(this, 'Square') || this;
        _this.lenth = lenth;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.GetArea = function () {
        if (this.lenth < 0 || this.width < 0) {
            throw new Error('Negative number is not accepted');
        }
        return this.width * this.lenth;
    };
    return Rectangle;
}(BaseShape));
var square = new Square(5);
var rectangle = new Rectangle(5, 7);
console.log("Square Area : ", square.GetArea());
console.log("Rectangle Area : ", rectangle.GetArea());
// Abstract classes are classes that cannot be directly instantiated but serve as blueprints for subclasses.
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    return Bird;
}());
var FlyingBird = /** @class */ (function (_super) {
    __extends(FlyingBird, _super);
    function FlyingBird(name) {
        return _super.call(this, name) || this;
    }
    FlyingBird.prototype.makeSound = function () {
        return "".concat(this.name, " is chirps happily");
    };
    FlyingBird.prototype.fly = function () {
        return true;
    };
    return FlyingBird;
}(Bird));
var Mockingbird = /** @class */ (function (_super) {
    __extends(Mockingbird, _super);
    function Mockingbird(name) {
        return _super.call(this, name) || this;
    }
    Mockingbird.prototype.makeSound = function () {
        return "".concat(this.name, " is chirps happily");
    };
    return Mockingbird;
}(Bird));
// Usage
var sparrow = new FlyingBird("Sparrow");
var mockingbird = new Mockingbird("Mockingbird");
console.log(sparrow.fly()); // Output: Sparrow is flying gracefully.
console.log(mockingbird.makeSound()); // Output: Mockingbird sings beautifully.
var birds = [sparrow, mockingbird];
for (var _i = 0, birds_1 = birds; _i < birds_1.length; _i++) {
    var bird = birds_1[_i];
    console.log(bird.makeSound());
}
