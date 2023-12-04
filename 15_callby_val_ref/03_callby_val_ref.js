function demo(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" }
}

a = 10;
b1 = { item: "un-changed" }
c1 = { item: "un-changed" }

demo(a, b1, c1)

console.log("a: ", a);
console.log("b1: ", b1);
console.log("c1: ", c1);

// Output:
// a:  10
// b1:  { item: 'changed' }
// c1:  { item: 'un-changed' }

