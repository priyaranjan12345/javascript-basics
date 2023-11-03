const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload on submit.

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector('#results')

    const validateHeight = (height == '' || height < 0 || isNaN(height))
    const validateWeight = (weight == '' || weight < 0 || isNaN(weight))

    if (validateHeight || validateWeight) {
        results.textContent = 'Error: invalid numbers'
    } else {
        const res = ((height * weight) / 10000).toFixed(2)
        results.textContent = `Result: ${res}`
    }
})