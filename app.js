//1. Optional Parameter handling in pure js
function sumOrder1(price, quantity) {
    if (!quantity) {
        return price;
    }
    else {
        return price * quantity;
    }
}
console.log("1. Total price " + sumOrder1(15, 5));
// console.log(`1. Total price ${sumOrder1(15)}`); - This throws an error in ts, not in js.
//2. Optional Parameter handling in ts
var sumOrder2 = function (price, quantity) { return price * quantity; };
console.log("1. Total price " + sumOrder2(15, 5));
console.log("1. Total price " + sumOrder2(15)); // returns NaN since quantity is undefined.
//3. Declare first, define later
var sumOrder3;
sumOrder3 = function (priceVal, QtyVal) {
    if (QtyVal === void 0) { QtyVal = 1; }
    return priceVal * QtyVal;
};
console.log("1. Total price " + sumOrder3(15, 5));
console.log("1. Total price " + sumOrder3(15));
