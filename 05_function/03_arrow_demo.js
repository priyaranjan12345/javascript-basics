const user = {
    username: "priyaranjan",
    price: 9090,

    message: function () {
        console.log(this.username + ", welcome to website")
        console.log(this);
    }

}

user.username = "John"
user.message()

console.log(this);

function hello() {
    let username = "Rama"
    console.log(this.username);
}

hello()

/**
 * this will work inside objects 
 * will not work inside methods or functions
 * 
 */

// arraow methods
// const addTwoNums = (n1, n2) => {
//     return n1+n2
// }

//or//

const addTwoNums = (n1, n2) => n1 + n2

console.log("Result: " + addTwoNums(10, 20));

// return object with arrow function
const muObj = () => ({ username: "Hello" })
console.log(muObj());

// array
const arr = [1, 2, 4, 5, 6, 7]
arr.forEach((v) => console.log(v))