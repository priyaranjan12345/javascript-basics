// <, >, <=, >=, ==, ===, !==, !=
// &&, ||

let temp = 41

if (temp === 41) {
    console.log("Yes")
} else {
    console.log("No")
}

const balance = 1000
// bad practice
if (balance > 400) console.log("Balance " + balance),
    console.log("Hello");

// good practice
if (balance > 400) {
    console.log("Balance " + balance)
    console.log("Hello")
}

// false means 0, -0, BigInt(On), "", null, undefine, NaN
// if "0" considered as true because 0 inside string
// [], {}, function() {} : truethy values
const email = "user@email.com"
if (email) {
    console.log(email)
} else {
    // if email is empty screen then this will execute
    console.log("Don't have email")
}

let arr = ["abc", "def"]
if(arr.length != 0){
    console.log("array is not empty");
}

// ternary operator
let price = 100
console.log(price > 100? "Too high": "normal");