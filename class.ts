import { Address } from './interface';

// import * as addr from './interface';

class Employee {
    private id: number;
    name: string;
    email: string;
    dob: Date;
    address: Address;

    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    constructor(id: number) { }

    getName(): string {
        return this.name;
    }
}

let employee1 = new Employee(10);
employee1.empId = 10;
employee1.name = 'test';
employee1.email = 'test@test.com';
employee1.dob = new Date();

console.log(employee1);
console.log(employee1.getName());


class Manager extends Employee {
    constructor(id: number) {
        super(id);
    }
}

// class Emp extends Manager implements Address {

// }

// const el = document.getElementById('div') as HTMLElement;