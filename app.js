//Spread Syntax 
//1. Spread Syntax in function calls - myFunction(...iterableObj)
function sumAll(msg) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    console.log('>>', msg);
    return num.reduce(function (prev, next) {
        return prev + next;
    });
}
console.log(sumAll('Sum of numbers in my Array: ', 3, 4, 6, 14, 8, 7, 4, 64));
//2. Spread Syntax in arrays 
var prices = [5, 7, 8, 19];
var misc = ['icecream', 'toppings'];
var newPrice = 9;
var allPrices = prices.concat([newPrice], misc);
console.log(allPrices);
//3. without spread syntax, use apply to spread array and pass as arguments
function myFunction1(x, y, z) {
    console.log(x, y, z);
}
var args = [0, 1, 2];
myFunction1.apply(null, args);
//with Spread Syntax, this is straightforward
function myFunction2() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    console.log.apply(console, num);
}
myFunction2(1, 2, 3);
myFunction2(); //returns nothing
myFunction2(null); //returns null
