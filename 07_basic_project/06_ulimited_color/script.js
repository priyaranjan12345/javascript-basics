// generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const container = document.querySelector('#container')

let interval;

startButton.addEventListener('click', (event) => {
    if (!interval) {
        interval = setInterval(() => {
            container.style.backgroundColor = randomColor()
        }, 1000)
    }
})

stopButton.addEventListener('click', (event) => {
    clearInterval(interval)
    interval = null
})