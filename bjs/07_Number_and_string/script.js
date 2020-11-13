let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

for (let index = 0; index < numbers.length; ++index) {

    document.getElementById('btn_'+ numbers[index]).addEventListener('click', function () {
        if (inputWindow.value === '0') {
            inputWindow.value = numbers[index];
        } else {
            inputWindow.value += numbers[index];       
        }
     })

}

// ****************** OPERATIONS *********************

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})
document.getElementById('btn_plus').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'sum';
        inputWindow.value = '';
    }
})
document.getElementById('btn_minus').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'minus';
        inputWindow.value = '';
    }
})
document.getElementById('btn_mnog').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'mnog';
        inputWindow.value = '';
    }
})
document.getElementById('btn_del').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseFloat(inputWindow.value);
        operation = 'del';
        inputWindow.value = '';
    }
})
document.getElementById('btn_point').addEventListener('click', function () {
    if (inputWindow.value != '') {
        inputWindow.value = inputWindow.value +'.';
    }
})
document.getElementById('btn_radic').addEventListener('click', function () {
        var result = Math.sqrt(parseFloat(inputWindow.value));
        document.querySelector('.log').innerHTML += ' &radic; ' + inputWindow.value + ' = ' + result + '<br>'; 
        inputWindow.value = result;
})
document.getElementById('btn_pm').addEventListener('click', function () {
    if (inputWindow.value != '') {
        inputWindow.value = -inputWindow.value;      
    }
})

// ****************** RESULT *********************

document.getElementById('btn_calc').addEventListener('click', function () {

    if (lastOperand !='' && inputWindow.value !='') {

        if (operation === 'sum') {
            var result = lastOperand + parseFloat(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' + ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }  

        if (operation === 'minus') {
            var result = lastOperand - parseFloat(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' - ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }   

        if (operation === 'mnog') {
            var result = lastOperand * parseFloat(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' * ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }

        if (operation === 'del') {
            var result = lastOperand / parseFloat(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' / ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }
    }

})