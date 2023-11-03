async function getResult() {
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getResult()

//or//

fetch('https://randomuser.me/api/').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(()=>{
    console.log("done");
})