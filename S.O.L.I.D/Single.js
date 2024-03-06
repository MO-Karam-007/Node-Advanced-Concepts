// Single Responsibility Principle (S)

// The first principle of SLOID, which you're studying, is likely Singleness of Purpose.

// This principle emphasizes designing and creating objects with a clear and singular function. 


// Class Example
class Circle
{
    constructor(radius)
    {
        this.radius = radius;
    }

    // Method with a single purpose: calculate area
    calculateArea()
    {
        return Math.PI * (this.radius ** 2);
    }

    // Additional method demonstrating separation of concerns
    logArea()
    {
        const area = this.calculateArea();
        console.log("Area of the circle:", area);
    }
}

// Create a circle object
const myCircle = new Circle(5);

// Call the dedicated method to get the area
const area = myCircle.calculateArea();

// Use the separate method for logging if needed
myCircle.logArea();



function calculateCircleArea(radius)
{
    // Only calculate and return the area
    return Math.PI * radius * radius;
}

// Use the function to calculate the area
const _area = calculateCircleArea(5);

// Log the area separately, keeping the function focused on its purpose
console.log("Area of the circle:", _area);