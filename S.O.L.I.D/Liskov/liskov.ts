// Liskov Substitution Principle (LSP),
//  a subclass can implement the superclass's methods without violating
//  the principle, as long as it does so correctly
// Here are 2 Examples You can check both of them 
interface Shape {
    type: string;
    getArea(): number;
}

abstract class BaseShape {
    constructor(readonly type: string) {
    }
    abstract GetArea(): number;
}

class Square extends BaseShape {
    constructor(private readonly lenth: number) {
        super('Square')
    }
    GetArea(): number {
        if (this.lenth < 0) {
            throw new Error('Negative number is not accepted')
        }
        return this.lenth ** 2
    }
}


class Rectangle extends BaseShape {
    constructor(private readonly lenth: number, private readonly width: number) {
        super('Square')
    }
    GetArea(): number {
        if (this.lenth < 0 || this.width < 0) {
            throw new Error('Negative number is not accepted')
        }
        return this.width * this.lenth
    }
}

const square = new Square(5);
const rectangle = new Rectangle(5, 7);

console.log(`Square Area : `, square.GetArea());
console.log(`Rectangle Area : `, rectangle.GetArea());




// Example 2 :   Liskov Substitution Principle  (LSP) applied to birds with different flying capabilities

interface flyable {
    fly(): boolean;
}
// Abstract classes are classes that cannot be directly instantiated but serve as blueprints for subclasses.
abstract class Bird {
    constructor(public readonly name: string) {
    }
    abstract makeSound(): string;
}

class FlyingBird extends Bird implements flyable {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return `${this.name} is chirps happily`
    }
    fly(): boolean {
        return true
    }
}

class Penguin extends Bird {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return `${this.name} is chirps  happily`
    }
}

// Usage
const sparrow = new FlyingBird("Sparrow");
const penguin = new Penguin("Penguin ");

console.log(sparrow.fly()); // Output: Sparrow is flying gracefully.
// console.log(penguin.fly()); // Output: We cannot fly the Penguin.


const birds: Bird[] = [sparrow, penguin]

for (const bird of birds) {
    console.log(bird.makeSound());
}