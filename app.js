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
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];
var twoarrays = a.concat(b);
console.log(twoarrays);
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
// myFunction2(null);//returns null
//4. Reduce with typescript
var priceArray = [15, 34, 56, 77];
var sum = priceArray.reduce(function (previous, current) {
    console.log(previous, '-', current);
    return previous + current;
}, 0);
function sumofnumbers(a1, a2, a3) {
    // return a1 + a2 + a3;
    console.log(a1 + a2 + a3);
}
;
sumofnumbers(1, 2, 3);
//5. Destructuring a structure  - object
var icecream = {
    name: 'matcha',
    toppings: ['gummy bears', 'cashews', 'chips']
};
var froyo = {
    name2: 'matcha',
    toppings2: ['gummy bears', 'cashews', 'chips']
};
function order(_a) {
    var mychoice = _a.name, mytoppings = _a.toppings;
    console.log(mychoice, mytoppings);
    console.log(mytoppings.length);
}
order(icecream);
// order(froyo); //undefined undefined, TypeError: Cannot read property 'length' of undefined
//6. Destructuring an array
var flavors = ['vanilla', 'choco', 'strawberry', 'mint choco'];
var ice2 = flavors[1], ice3 = flavors[2];
console.log(ice2);
console.log(ice3);
