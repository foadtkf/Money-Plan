// Variable names list:
// input fileds:
// income: #income; food: #exp-food; rent: #exp-rent; cloth: #exp-cloth;save: #save-percent; 
// buttons:
// calculate-button: #calculate; save-button: #save;
// headers:
// total-expense: #exp-total; balance: #balance; saving-amount: #savings; remaining-balance: #remainings;

// function to return an element by id
function element(name) {
    return document.getElementById(name);
}
// function to check whether its a string or not
function strcheck(name) {
    if (isNaN(element(name).value)) {
        return false;
    } else if (element(name).value.length < 1)
        return false;
    else
        return true;

}
// function to check whether its a negative number or not
function numcheck(name) {
    if (parseFloat(element(name).value) < 0)
        return false;
    else
        return true;
}
// Event for "calculate" button
element('calculate').addEventListener('click', function() {
    if (!strcheck('income') || !strcheck('exp-food') || !strcheck('exp-rent') || !strcheck('exp-cloth')) {
        element('balance').innerText = 0;
        element('exp-total').innerText = 0;
        alert('Please enter number');
    } else if (!numcheck('income') || !numcheck('exp-food') || !numcheck('exp-rent') || !numcheck('exp-cloth'))
        alert('Value cannot be negative');

    else {
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
    }
})

// Event for "save" button
element('save').addEventListener('click', function() {
    if (!strcheck('save-percent'))
        alert('Please enter number');
    else if (!numcheck('save-percent'))
        alert('Value cannot be negative');
    else {
        const sval = parseFloat(element('save-percent').value);
        const income = parseFloat(element('income').value);
        const balance = parseFloat(element('balance').innerText);
        const temp = (income / 100) * sval;
        if (temp > balance) {
            alert('savings cannot be greater than balance');
            element('save-percent').value = '';
        } else if (temp < 0)
            alert('savings cannot be negative');
        else {
            element('savings').innerText = temp;
            element('remainings').innerText = balance - temp;
        }
    }
})