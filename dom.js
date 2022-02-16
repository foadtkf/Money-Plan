function element(name) {
    return document.getElementById(name);
}

element('calculate').addEventListener('click', function() {
    const income = parseFloat(element('income').value);
    const food = parseFloat(element('exp-food').value);
    const rent = parseFloat(element('exp-rent').value);
    const cloth = parseFloat(element('exp-cloth').value);
    const total = food + rent + cloth;
    if (total > income) {
        alert('expense cannot be greater than income')
        element('exp-total').innerText = 0;
        element('balance').innerText = 0;
    } else {
        element('exp-total').innerText = total;
        element('balance').innerText = income - total;
    }
})

element('save').addEventListener('click', function() {
    const sval = parseFloat(element('save-percent').value);
    const income = parseFloat(element('income').value);
    const balance = parseFloat(element('balance').innerText);
    const temp = (income / 100) * sval;
    if (temp > balance) {
        alert('savings cannot be greater than balance');
        element('save-percent').value = '';
    } else {
        element('savings').innerText = temp;
        element('remainings').innerText = balance - temp;
    }
})