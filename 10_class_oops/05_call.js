// important passing reference

function SetUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    //.call hold reference, need pass `this` context of createUser() 
    // so that SetUsername() will use context of createUser()
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const context = new createUser("priyaranjan", "priyaranjan@gmail.com", "Password@1234")

console.log(context);