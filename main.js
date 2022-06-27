const refs = {
    resultValue: document.querySelector('.result-value'),
    numbers: document.querySelector('.numbers'),
    valueList: document.querySelector('.value-list'),
    deleteButton: document.querySelector('.delete'),
    line: document.querySelector('hr'),
}

let a = '';
let b = '';
let sign = '';
let finish = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['+', '-', 'X', '/'];


refs.valueList.addEventListener('click', onValueListClick);
refs.deleteButton.onClick = clearAll;



function onValueListClick(e) {

    if(!e.target.classList.contains('value-item')) return;
    if(e.target.classList.contains('delete')) return;
    refs.resultValue.textContent = '';

    const value = e.target.textContent;

    if(numbers.includes(value)) {
        if(b === '' && sign === '') {
            a += value;
            console.log(a, b, sign);
            refs.resultValue.textContent = a;
        }
        else if(a !== '' && b !== '' && finish) {
            b = value;
            finish = false;
            refs.resultValue.textContent = b;
            console.log(a, b, sign);
        }
        else  {
            b += value;
            refs.resultValue.textContent = b;
            console.log(a, b, sign);
            if(a === refs.resultValue.textContent) {
                console.log('Нельзя делить на ноль');
            }
        }
        return;
    }

    if(signs.includes(value)) {
        sign = value;
        console.log(a, b, sign);
        refs.resultValue.textContent = sign;
        if(a === refs.resultValue.textContent) {
            console.log('Нельзя делить на ноль');
        }
    }

    if(value === '=') {
        if(b === ''){
            b = a;
        }
        

        switch(sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if(b === '0'){
                    refs.resultValue.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        refs.resultValue.textContent = a;
        console.log(a, b, sign);
    }
}

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    refs.resultValue.textContent = '0';
}

