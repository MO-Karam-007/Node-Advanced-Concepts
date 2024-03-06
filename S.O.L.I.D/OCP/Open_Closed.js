// OPEN CLOSED PRINCIPLE (OCP)
// open for extension, but closed for modification
// Initially, we support only two types: regular and premium.
var Customer = /** @class */ (function () {
    function Customer(type) {
        this.type = type;
    }
    Customer.prototype.getDiscount = function () {
        if (this.type == 'regular') {
            return 0.1;
        }
        else if (this.type == "premium") {
            return 0.2;
        }
        else {
            throw new Error('Invalid Customer type');
        }
    };
    return Customer;
}());
var regular = new Customer('regular');
var premium = new Customer('premium');
console.log("Refular discount : ", regular.getDiscount());
console.log("Premium discount : ", premium.getDiscount());
var RegularDiscount = /** @class */ (function () {
    function RegularDiscount() {
    }
    RegularDiscount.prototype.calculateDiscount = function (amount) {
        return amount * 0.1;
    };
    return RegularDiscount;
}());
var PremiumDiscount = /** @class */ (function () {
    function PremiumDiscount() {
    }
    PremiumDiscount.prototype.calculateDiscount = function (amount) {
        return amount * 0.2;
    };
    return PremiumDiscount;
}());
var WholesaleDiscount = /** @class */ (function () {
    function WholesaleDiscount() {
    }
    WholesaleDiscount.prototype.calculateDiscount = function (amount) {
        return amount * 0.3;
    };
    return WholesaleDiscount;
}());
var CustomerOCP = /** @class */ (function () {
    function CustomerOCP(type, discountStategy) {
        this.type = type;
        this.discountStategy = discountStategy;
    }
    CustomerOCP.prototype.getDiscount = function (amount) {
        return this.discountStategy.calculateDiscount(amount);
    };
    return CustomerOCP;
}());
var _regular = new CustomerOCP('regular', new RegularDiscount());
var _premium = new CustomerOCP('premium', new PremiumDiscount());
var _wholeSale = new CustomerOCP('wholesale', new WholesaleDiscount());
console.log("Regular Customer Discount", _regular.getDiscount(100));
console.log("Premium Customer Discount", _premium.getDiscount(100));
console.log("WholeSale Customer Discount", _wholeSale.getDiscount(100));
