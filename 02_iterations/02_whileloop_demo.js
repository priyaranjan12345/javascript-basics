let step = 10

while (step > 0) {

    console.log(step);
    step--
}

const fruits = ["Apple", "Banana", "Mango", "Kiwi", "Dragon fruits", "Orange"]
let fruitsLen = fruits.length
while (fruitsLen > 0) {
    fruitsLen--
    console.log(fruits[fruitsLen])
}


let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10)