const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let initValue = 0
const sumOfAllNums = items.reduce(
    (prev, current) => prev + current, initValue
)

console.log(sumOfAllNums);

const sumOfAllNums1 = items.reduce(
    (prev, current) => {
        console.log(prev + ":" + current);
        return prev + current
    }, initValue
)

console.log(sumOfAllNums1);

