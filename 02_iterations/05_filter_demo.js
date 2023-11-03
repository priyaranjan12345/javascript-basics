const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenItems = items.filter((n) => n % 2 == 0)
console.log(evenItems);

let oddItems = items.filter((n) => { return n % 2 != 0 })
console.log(oddItems);

let res = items.find((e) => e == 2)
console.log(res);

const newNums = items
                .map((n) => n + 1)
                .map((n) => n + 6)
                .filter((n) => n % 2 == 0)
console.log(newNums);