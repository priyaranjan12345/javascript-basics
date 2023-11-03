function print(msg) {
    console.log(msg)
}

const marvel_heros = ["Thor", "Iron Man", "Hulk"]
const dc_heros = ["Super Man", "Bat Man"]

// concat arrays
const heros = marvel_heros.concat(dc_heros)
print(heros)
const all_heros = [...marvel_heros, ...dc_heros]
print("all heros: " + all_heros)

// insert at front
marvel_heros.unshift("Loki")
print(marvel_heros)

var a = marvel_heros.shift() // remove and return first element
print(a)
print(marvel_heros)

// insert at index
const months = ["Jan", "Mar", "Apr", "May"];
months.splice(1, 0, "Feb");
print(months)

// flat
const manyarr = [1, 3, [1, 3, 4], [3, [7, 8]]]
print(manyarr.flat(Infinity))

const fullName = "Priyaranjan Mantri"
print(Array.from(fullName))

let score = 100
let score1 = 100
let score2 = 100
print(Array.of(score, score1, score2))