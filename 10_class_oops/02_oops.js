const user = {
    username: "Priyaranjan",
    age: 10,
    sigedIn: false,
    getNums: function () {
        console.log("Username : " + this.username);
        return this.age
    }
}

const age = user.getNums()
console.log("Age : " + age);

function MyUser(name, age) {
    this.name = name
    this.age = age    

    this.method = ()=>{
        console.log("Username : " + this.name);
    }

    return this
}

const usr = MyUser("Priyaranjan", 20)
usr.method()
console.log(usr);