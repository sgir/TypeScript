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

const a = [1,2,3,4];
const b = [5,6,7,8];

const twoarrays = [...a, ...b];
console.log(twoarrays);

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
// myFunction2(null);//returns null

//4. Reduce with typescript
const priceArray = [15,34,56,77];
const sum = priceArray.reduce((previous, current) => { 
  console.log(previous, '-', current);
  return previous + current;
}, 0);

function sumofnumbers (a1: number, a2 : number, a3: number){
  // return a1 + a2 + a3;
  console.log(a1 +a2 +a3);
};
sumofnumbers(1,2,3);

//5. Destructuring a structure  - object

const icecream = {
  name: 'matcha',
  toppings: ['gummy bears', 'cashews', 'chips']
};

const froyo = {
  name2: 'matcha',
  toppings2: ['gummy bears', 'cashews', 'chips']
};

function order({name: mychoice, toppings: mytoppings}){
  console.log(mychoice, mytoppings);
  console.log(mytoppings.length)
}

order(icecream);

// order(froyo); //undefined undefined, TypeError: Cannot read property 'length' of undefined

//6. Destructuring an array
const flavors = ['vanilla','choco','strawberry','mint choco'];
const [, ice2, ice3]= flavors;
console.log(ice2);
console.log(ice3)