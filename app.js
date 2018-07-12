//Objects in TypeScript
var icecream;
icecream = {
    flavor: 'vanilla',
    toppings: ['marshmallow', 'sprinkles'],
    price: 15,
    getName: function () {
        return icecream.flavor;
    }
};
console.log(icecream);
console.log(icecream.getName());
