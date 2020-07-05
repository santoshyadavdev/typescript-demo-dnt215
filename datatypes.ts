let fname: string;
// type inference
let lastName = 'test1';

let age: number;
age = 10;

let population: bigint;

let isValid: boolean = false;

console.log(isValid);

let employee: any;

employee = 10;
employee = 'test';
employee = ['ftte', 10];

const ages = employee as number;

enum Color {
    Red,
    Green,
    Blue
}

let color = Color.Blue;

// function getValue(num1: number, num2: number): [number, number] {
//     return [num2, num1]
// }
let swappedNumber: [number, number, string];
swappedNumber = [10, 5, 'test'];
swappedNumber[0];

swappedNumber[1];


let names: Array<string>;

names = ['1', '2'];

names.push('3')

names[0];

names.pop();

names.forEach((name)=> console.log(name));

for(const name of names) {
    console.log(name);    
}

const filteredName = names.filter(name=> name == '1');

console.log(filteredName);

const findname = names.find(name=> name == '2');

console.log(findname);

const pi= 3.14;

