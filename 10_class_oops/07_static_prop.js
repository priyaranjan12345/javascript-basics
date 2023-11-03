class User {
    constructor(username){
        this.username = username
        this.#logger()
    }

    #logger() {
        // only access inside class
        console.log(`Username: ${this.username}`);
    }

    createId() {
        return `123`
    }

    static handleEvent() {
        console.log("Test");
    }
}

const user = new User("Rama")
console.log(user.createId())

User.handleEvent()