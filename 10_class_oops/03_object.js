function mult4(num) {
    return num * 4
}

mult4.power = 2

console.log(mult4(2));
console.log(mult4.power);
console.log(mult4.prototype)

function createUser(username, score) {
    this.username = username
    this.score = score
}

// important
// inject function // required fromat: -> function () {}
createUser.prototype.increment = function () {
    console.log(this.score);
}

const user1 = new createUser("Rama", 90)
const user2 = new createUser("Hari", 80)

user1.increment()
user2.increment()
