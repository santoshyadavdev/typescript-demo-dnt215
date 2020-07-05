export interface Address {
    addrLine1: string;
    addrLine2: string;
    city?: 'Pune' | string;
    pin: number;
}

// union type
type addressUnion = Address | Array<Address>;

let newAddress : addressUnion ;

newAddress = {
    pin: 4111,
    addrLine1: 'dfsdf',
    addrLine2 : 'sfsdfsd'
}

newAddress = [{
    pin: 4111,
    addrLine1: 'dfsdf',
    addrLine2 : 'sfsdfsd'
}]

// intersection type
type addressWithCountry = Address & {
    country: string
}

let myAdderss: addressWithCountry = {

}

// interface Country {
//     country: string
// }

// interface AddressType {
//     address: Address,
//     country: Country
// }

export const pi = 4.13;

export function test() {}