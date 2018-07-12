//Objects in TypeScript

let icecream: {
    flavor:string,
    toppings: string[],
    price: number,
    getName(): string
}
icecream = {
    flavor: 'vanilla',
    toppings: ['marshmallow','sprinkles'],
    price: 15, 
    getName() {
        return icecream.flavor;
    }
}


console.log(icecream);
console.log(icecream.getName());