//Spread Syntax 
//1. Spread Syntax in function calls - myFunction(...iterableObj)
function sumAll(msg: string, ...num: number[]) {
    console.log('>>', msg);
    return num.reduce(function(prev, next) {
      return prev + next;
    });
  }
  
console.log(sumAll('Sum of numbers in my Array: ', 3, 4, 6, 14, 8, 7, 4, 64));

//2. Spread Syntax in arrays 
const prices = [5, 7, 8, 19];
const misc = ['icecream', 'toppings'];
const newPrice = 9;
const allPrices = [...prices, newPrice, ...misc];

console.log(allPrices);

//3. without spread syntax, use apply to spread array and pass as arguments
function myFunction1(x:any, y:any, z:any) {
    console.log(x, y,z);
 }
var args = [0, 1, 2];
myFunction1.apply(null, args);

//with Spread Syntax, this is straightforward
function myFunction2(...num:number[]) {
    console.log(...num);
}
myFunction2(1,2,3);
myFunction2();//returns nothing
myFunction2(null);//returns null