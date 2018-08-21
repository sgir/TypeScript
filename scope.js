// 1. scope + compilation
// console.log(a);
// var a = 2; //undefined
//closure - :()
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
;
// doesn't work either
for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    })();
}
;
var _loop_1 = function () {
    var j = i; // let with block-scope;
    setTimeout(function timer() {
        console.log(j);
    }, j * 1000);
};
//works!
for (var i = 1; i <= 5; i++) {
    _loop_1();
}
;
// Scope Example
//scope 1
function foo(a) {
    //scope 2
    var b = a * 2;
    function bar(c) {
        //scope 3
        console.log(a, b, c);
    }
    bar(b * 3);
}
foo(2);
