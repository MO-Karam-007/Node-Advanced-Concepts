// OPEN CLOSED PRINCIPLE (OCP)

// open for extension, but closed for modification

// Initially, we support only two types: regular and premium.
class Customer {
    type;
    constructor(type: string) {
        this.type = type;
    }

    getDiscount() {
        if (this.type == 'regular') {
            return 0.1
        } else if (this.type == "premium") {
            return 0.2
        } else {
            throw new Error('Invalid Customer type')
        }
    }
}

const regular = new Customer('regular')
const premium = new Customer('premium')

console.log(`Refular discount : `, regular.getDiscount());
console.log(`Premium discount : `, premium.getDiscount());

// This is how to violates the OCP principle
// To add "wholesale," we need to modify the getDiscount method to include a new conditional statement.
// Here is the OCP principle

interface DiscountStrategy {
    calculateDiscount(amount: number): number;
}

class RegularDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        return amount * 0.1
    }
}

class PremiumDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        return amount * 0.2;
    }
}

class WholesaleDiscount implements DiscountStrategy {
    calculateDiscount(amount: number): number {
        return amount * 0.3
    }
}

class CustomerOCP {
    constructor(private type: string, private discountStategy: DiscountStrategy) {
    }
    getDiscount(amount: number): number {
        return this.discountStategy.calculateDiscount(amount);
    }

}

const _regular = new CustomerOCP('regular', new RegularDiscount())
const _premium = new CustomerOCP('premium', new PremiumDiscount())
const _wholeSale = new CustomerOCP('wholesale', new WholesaleDiscount())

console.log(`Regular Customer Discount`, _regular.getDiscount(100));
console.log(`Premium Customer Discount`, _premium.getDiscount(100));
console.log(`WholeSale Customer Discount`, _wholeSale.getDiscount(100));