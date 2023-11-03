function sum(a, b) {
    return a + b
}

function myfunc(n1 = 0, n2 = 0) { // function with default value
    return n1 + n2
}

console.log(myfunc(1, 3))


/// multiple params
function sumNums(...nums) {
    return nums
}

console.log(sumNums(1, 2, 3, 4))