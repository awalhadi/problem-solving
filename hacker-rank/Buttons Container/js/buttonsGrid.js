let buttons=[1,2,3,6,9,8,7,4];
let btn_values=[1,2,3,6,9,8,7,4];
document.getElementById('btn5').addEventListener('click', function() {
    btn_values.unshift(btn_values.pop());
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(`btn${buttons[i]}`).innerHTML = btn_values[i];
    }
})