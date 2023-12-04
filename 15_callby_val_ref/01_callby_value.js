let a = 20
let b = a

console.log("a", a);
console.log("b", b);

a = 30

console.log("--------------");

console.log("a", a);
console.log("b", b);

/**
 * output:
        a 20
        b 20
        --------------
        a 30
        b 20
 */