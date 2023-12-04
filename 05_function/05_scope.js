// global scope
var c = 10
let n1 = 2000

function test() {
    // functional scope
    var c = 1000 // treated as local variable
    c = 80 // treaded as global variable
}

test()
console.log(c);

if (true) {
    // block scope
    var c = 20 // treated as global variable
    var d = 2000
}

console.log(c);
console.log(d);
console.log(n1);