// class based
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email
    }

    get password() {
        return this._password
    }

    set email(email) {
        this._email = email
    }

    set password(password) {
        this._password = password
    }
}

const user = new User("abc@gmail.com", "abc123")
console.log(user.email);

// or function based //

// function UserOne(email, password) {
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function() {return this._email},
//         set: function(email) { this._email = email }
//     })

//     Object.defineProperty(this, 'password', {
//         get: function() {return this._password},
//         set: function(password) { this._password = password }
//     })
// }

//or//

class UserOne {
    constructor(email, password) {
        this._email = email
        this._password = password

        Object.defineProperty(this, 'email', {
            get: function () { return this._email },
            set: function (email) { this._email = email }
        })

        Object.defineProperty(this, 'password', {
            get: function () { return this._password },
            set: function (password) { this._password = password }
        })
    }
}

const userOne = new UserOne("demo", "pss")
console.log(userOne.email);

// or object based// 

const UserTwo = {
    _email: "hi@gmail.com",
    _password: "pass1234",

    get email() {
        return this._email
    },

    get password() {
        return this._password
    },

    set email(email) {
        this._email = email
    },

    set password(password) {
        this._password = password
    }

}

const userTwo = Object.create(UserTwo)
console.log(userTwo.password);