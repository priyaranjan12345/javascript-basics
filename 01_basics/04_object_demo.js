// Singletone / Constructor <Object.create>

function print(msg) {
    console.log(msg)
}

const tinderUser = new Object()
tinderUser.id = 10
tinderUser.name = "John Smith"
tinderUser.age = 24
tinderUser.isLoggedIn = false

// print(tinderUser)

// nesting 
const regularUser = {
    email: "john@email.com",
    name: {
        fisrtName: "John",
        lastName: "Smith"
    }
}

// print(regularUser.name.fisrtName)

const obj1 = {1: "One", 2: "Two"}
const obj2 = {3: "Three", 4: "Four"}

// merge object (obj1 and obj2)
const obj3 = Object.assign({}, obj1, obj2) // {} -> target, obj1, obj2 -> source // good proctice to use {}
print(obj3)

//or//
const obj4 = {...obj1, ...obj2}
print(obj4)

// array of objects
const user = [
    {
        "rollno": 1,
        "name": "John"
    },
    {
        "rollno": 2,
        "name": "Bob"
    }
]
print(user[1].name)

// print keys, values and enties of object
print(Object.keys(tinderUser))
print(Object.values(tinderUser))
print(Object.entries(tinderUser))

print(tinderUser.hasOwnProperty("name"))