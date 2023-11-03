// var a = 10
let b = 20
const c = 30

if(true) {
    var a = 100 // or same as 'a = 100' // block scope unsafe -> global scope
    let b = 200 // block scope safe // -> local scope
    const c = 300 // block scope safe // -> local scope
}

// var always global scope

console.log(a)
console.log(b)
console.log(c)

// case
console.log(addOne(6))
function addOne(num) {return num+20}

const addTwo = function(num) {return num+10}
console.log(addTwo(2));