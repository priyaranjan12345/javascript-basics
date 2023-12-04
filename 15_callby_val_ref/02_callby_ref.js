const obj1 = {
    name: "Rama",
    age: 22
}

const obj2 = obj1

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

obj2.name = "Krisha"
obj1.age = 24

console.log("--------------------");

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

console.log("--------------------1");

var a = {item: "hello"};
var b = a;
b.item = "hi"

console.log("a: ", a);
console.log("b: ", b);

console.log("--------------------2");
b = {name: "Rama"};
b.item = "ok"
console.log("a: ", a);
console.log("b: ", b);

