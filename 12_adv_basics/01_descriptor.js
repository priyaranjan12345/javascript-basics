console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const course = {
    name: "JavaScript",
    price: 999,
    isAvailable: true,
    counter: function () { }
}

console.log(Object.getOwnPropertyDescriptor(course, "name"));
console.log(course);



// change descriptor
Object.defineProperty(
    course,
    "name",
    {
        writable: false, // prevent rewrite
        enumerable: false // prevent iteration
    }
)

console.log("\n-- after change properties --\n");

console.log(Object.getOwnPropertyDescriptor(course, "name"));

course.name = "Python"
console.log(course);

for (const [key, value] of Object.entries(course)) {
    if (typeof value !== 'function') { 
        console.log(`key: ${key} and value: ${value}`); 
    }
}