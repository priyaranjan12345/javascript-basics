// type, timestamp, defaultPrevent
// target, toElement, srcElement, current target
// positions
// alt. ctrl. shoft keys

// event propagation :- 

const insert = document.getElementById("insert")

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${event.key}</td>
                <td>${event.keyCode}</td>
                <td>${event.code}</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
    <div>
    `
})