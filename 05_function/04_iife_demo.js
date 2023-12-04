// immediate invoke function expression (IIFE)
// no need to call. will execute on invoke

// important iife

(function () {
    console.log("init")
})(); // give a ; to end method, otherwise following methods will not execute

(() => {
    console.log("init")
})();

((user) => {
    console.log(`${user}`)
})("John");