const clock = document.querySelector('#clock')

// run method in each 1sec interval
setInterval(()=>{
    let date = new Date()
    clock.textContent = date.toLocaleTimeString()
}, 1000)