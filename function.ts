// function declaration or named function
function add(num1: number, num2: number, num3?: number): number {
    return num1 + num2;
}

console.log(add(10, 5))
console.log(add(10, 5, 401))

// function expression
const sub = (num1: number, num2: number, num3=50): number => {
    return num1 - num2;
}

sub(10, 5);
sub(10, 5,5);

// arrow function
const multiply = (num1: number, num2: number) => num1 * num2;


