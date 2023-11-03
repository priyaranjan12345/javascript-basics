const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let nums = []
items.forEach((item) => nums.push(item * 10))
console.log(nums);


// when not to return then `function` need

items.forEach(function (item) {
    console.log(item);
})

items.forEach(function (item, index, arr) {
    console.log(item + "\t" + index + "\t" + arr);
})

const langs = [
    {
        name: "Java",
        version: "17"
    },
    {
        name: "Python",
        version: "10"
    }
]

langs.forEach(
    (obj) => {
        console.log(obj.name);
        console.log(obj.version);
    }
)
