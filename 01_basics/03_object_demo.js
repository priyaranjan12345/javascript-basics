
// Object literals

const mySym = Symbol("key-1")

// keys treat as String 
const JsUser = {
    name: "Priyaranjan Mantri",
    age: 24,
    email: "priyaranjanmantri@gmail.com",
    isLoggedIn: false,
    workingDays: ["Monday", "Tuesday"],
    [mySym]: "jeys" // important 
}

console.log(JsUser.age)
console.log(JsUser["name"])

console.log(JsUser[mySym])
console.log(typeof mySym)

// make immutable JsUser
// Object.freeze(JsUser)
// will not change
JsUser.age = 20
console.log(JsUser)

// add functions to object
JsUser.onSuccess = function () {
    console.log("Success")
}

JsUser.printName = function () {
    console.log("Name: " + this.name)
}

console.log(JsUser.onSuccess())
console.log(JsUser.printName())