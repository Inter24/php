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
        lastOperand = parseInt(inputWindow.value);
        operation = 'sum';
        inputWindow.value = '';
    }
})
document.getElementById('btn_minus').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'minus';
        inputWindow.value = '';
    }
})
document.getElementById('btn_mnog').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'mnog';
        inputWindow.value = '';
    }
})
document.getElementById('btn_del').addEventListener('click', function () {
    if (inputWindow.value != '') {
        lastOperand = parseInt(inputWindow.value);
        operation = 'del';
        inputWindow.value = '';
    }
})

// ****************** RESULT *********************

document.getElementById('btn_calc').addEventListener('click', function () {

    if (lastOperand !='' && inputWindow.value !='') {

        if (operation === 'sum') {
            var result = lastOperand + parseInt(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' + ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }  

        if (operation === 'minus') {
            var result = lastOperand - parseInt(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' - ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }   

        if (operation === 'mnog') {
            var result = lastOperand * parseInt(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' * ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }

        if (operation === 'del') {
            var result = lastOperand / parseInt(inputWindow.value);
            document.querySelector('.log').innerHTML += lastOperand + ' / ' + inputWindow.value + ' = ' + result + '<br>'; 
            inputWindow.value = result;
        }

    }

})