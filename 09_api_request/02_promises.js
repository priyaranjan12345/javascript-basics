// promise : pending, fulfill, rejected

// fetch('url').then().catch().finally()

// introduce in es6
const promiseOne = new Promise((resolve, reject) => {
    // async task eg: db calls, cryptography, network
    setTimeout(() => {
        console.log("Async - 1 task is complete");
        resolve("data")
    }, 1000)
})

//.then() -> resolve
promiseOne.then((value) => {
    console.log("Promise consumed" + value);
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async - 2 task is complete");
        let error = false
        if (!error) {
            const data = {
                name: {
                    firstName: "Priyaranjan",
                    lastName: "Mantri"
                },
                age: 24,
                skills: ["JavaScript", "Java", "Python"]
            }
            resolve(data)
        } else {
            errorMessage = {
                message: "Something went wrong",
                errorType: "Not Found",
                statuscode: 404
            }
            reject(errorMessage)
        }
    }, 1000)
})

promiseTwo.then((user) => {
    // success block
    console.log("Data: " + user);
    return user.name
}).then((name) => {
    // get return user.name here
    console.log(name.firstName);
}).catch((err) => {
    // error block
    console.log("Error: " + err.message);
}).finally(() => {
    // this block will execute in bith err and success case
    console.log("finally task completed");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async - 3 task is complete");
        let error = false
        if (!error) {
            const data = {
                name: {
                    firstName: "Priyaranjan",
                    lastName: "Mantri"
                },
                age: 24,
                skills: ["JavaScript", "Java", "Python"]
            }
            resolve(data)
        } else {
            errorMessage = {
                message: "Something went wrong",
                errorType: "Not Found",
                statuscode: 404
            }
            reject(errorMessage)
        }
    }, 1000)
})


async function consumePromise() {
    try {
        const response = await promiseThree
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }  
}

consumePromise()