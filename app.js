//Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
var icecream = ['vanilla', 45, false];
icecream = ['chocolate', 15, true];
console.log(icecream[0]);
// icecream[1] = 'test'; throws an error that a string cannot be assigned to a number
// When accessing an element outside the set of known indices, a union type is used instead:
icecream[4] = 'This is a union type that can take string, number or a boolean';
console.log(icecream);
