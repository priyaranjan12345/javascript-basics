const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const item of items) {
    console.log(item);
}

let nums = []
items.forEach((item) => nums.push(item * 10))
console.log(nums);

const greetings = "hello world"
for (const iterator of greetings) {
    console.log(iterator);
}

const map = new Map()
map.set("name", "Priyaranjan")
map.set("age", 24)
map.set("email", "p@g.com")

console.log(map);

for (const [key, value] of map) {
    console.log(key + ":" + value);
}

// object is not iterable
const JsUser = {
    name: {
        firstName: "Priyaranjan",
        lastName: "Mantri"
    },
    age: 24,
    email: "priyaranjanmantri@gmail.com",
    isLoggedIn: false,
    workingDays: ["Monday", "Tuesday"],
}

for (const key in JsUser) {
   console.log(JsUser[key]);
}