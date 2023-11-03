// array, list, map, hashmap, set

let arr = [1, 2, 3, 4]

// add
arr.push(6)

// remove form end
arr.pop()

// remove all elements of arr
// arr.length = 0

// get element at index
console.log(arr[0])

// arr size
console.log(arr.length)

// print arr
console.log(arr)

// print all index of arr
console.log(Object.keys(arr))   

let nums = [10, 20, 30, 40]
const concArr = arr.concat(nums)
console.log(concArr)
console.log(concArr.join(' and '))


var mapArr = arr.map(e => e * 4)
console.log(mapArr)

var revMapArr = mapArr.reverse()
console.log(`revesed: ${revMapArr}`)

var fruits = new Array("Mango", "Banana", "Apple")
console.log(fruits)

// check apple contains in fruits
console.log(fruits.includes("Apple"))

// check index of apple
console.log(fruits.indexOf("Apple"))

// unshift, shift
// slice operator