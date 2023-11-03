class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    print() {
        console.log(`Name: ${this.name} \nAge: ${this.age}`);
    }
}

const student = new Student("Priyaranjan", "24")
student.print()