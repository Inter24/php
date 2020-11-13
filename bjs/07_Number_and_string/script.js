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
/*
document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value === '0') {
        inputWindow.value = '1';
    } else {
        inputWindow.value += '1';
    }     
})*/



document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

