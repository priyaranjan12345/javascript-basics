// good practive
Object.defineProperty(Array.prototype, "isEmpty", {
    value: function isEmpty() {
        return this.length == 0;
    },
    writable: true,
    configurable: true,
});

// bad practice
Array.prototype.hello = function() {
    return this.length == 0
}

const arr = [1, 2]
console.log(arr.isEmpty())

console.log(arr.hello())

