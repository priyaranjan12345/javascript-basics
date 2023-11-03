let name = "Abcd     "

// inject a method 
String.prototype.trueLenght = function () {
    return this.trim().length
}

console.log(name.trueLenght());

const TeachSupport = {
    isAvilable: true
}

const TASupport = {
    name: "Nothings",
    fullTime: true,
    __proto__: TeachSupport
}