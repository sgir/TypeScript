//1. Optional Parameter handling in pure js
function sumOrder1(price, quantity){
    if (!quantity) {
        return price;
      } else {
        return price * quantity;
      }
}

console.log(`1. Total price ${sumOrder1(15, 5)}`);
// console.log(`1. Total price ${sumOrder1(15)}`); - This throws an error in ts, not in js.

//2. Optional Parameter handling in ts
let sumOrder2 = (price: number, quantity?:number):number=> price*quantity;

console.log(`1. Total price ${sumOrder2(15, 5)}`);
console.log(`1. Total price ${sumOrder2(15)}`); // returns NaN since quantity is undefined.

//3. Syntax for function declaration that lets us change the implementation later.
let sumOrder3: (price: number, quantity?:number)=> number;

//implementation 1
sumOrder3 = (priceVal,QtyVal=1) =>{
    return priceVal*QtyVal;
} 

console.log(`1. Total price ${sumOrder3(15, 5)}`);
console.log(`1. Total price ${sumOrder3(15)}`);

//implementation 2
