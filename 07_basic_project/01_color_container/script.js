const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// add events to buttons
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonId = event.target.id
        body.style.backgroundColor = buttonId

        // switch (buttonId) {
        //     case 'grey':
        //         body.style.backgroundColor = buttonId
        //         break;

        //     default:
        //         break;
        // }
    })
});