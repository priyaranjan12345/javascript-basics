class User {
    constructor(username) {
        this.username = username
    }

    getUsername() {
        console.log("USERNAME: "+this.username);
    }

    static getPassword() {
        // only access by Class name
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)

        this.email = email
        this.password = password
    }

    showDetails() {
        console.log(`username: ${this.username}\nemail: ${this.email}\npassword: ${this.password}`);
    }
}

class Abc{}

const teacher = new Teacher("Rama", "rama@mail.com", "password1234")
teacher.showDetails()
teacher.getUsername()

if(teacher instanceof Teacher) {
    console.log("yes");
}else{
    console.log("no");
}