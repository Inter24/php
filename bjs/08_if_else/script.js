
//let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
//let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
//alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let minValue = parseInt(document.getElementById('minvalue').value);
let maxValue = parseInt(document.getElementById('maxvalue').value);
    minValue = minValue || 0;
    maxValue = maxValue || 100;
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;  
let answerNumber  = Math.floor((minValue + maxValue) / 2);

let orderNumber = 1;
let gameRun = true;
let answertext = '';
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answertext = convertnumber(answerNumber);
    answerField.innerText = `Вы загадали число \n ${answertext }?`;

document.getElementById('start').addEventListener('click', function () {    
    document.getElementById("accordion").classList.remove('show');
    document.getElementById("accordion").classList.add('hide');   
    document.getElementById("game").classList.remove('hide');
    document.getElementById("game").classList.add('show');      
   
    minValue = parseInt(document.getElementById('minvalue').value);
    maxValue = parseInt(document.getElementById('maxvalue').value);
    minValue = minValue || 0;
    maxValue = maxValue || 100;
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;  
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answertext = convertnumber(answerNumber);
    answerField.innerText = `Вы загадали число \n ${answertext }?`;

    document.getElementById('min').innerText = minValue; 
    document.getElementById('max').innerText = maxValue; 
})


document.getElementById('btnRetry').addEventListener('click', function () {
    document.getElementById('minvalue').value = 0;
    document.getElementById('maxvalue').value = 100;
    orderNumber = 0;
        //restart game
        document.getElementById("game").classList.remove('show');
        document.getElementById("game").classList.add('hide');   
        document.getElementById("accordion").classList.remove('hide');
        document.getElementById("accordion").classList.add('show');
        document.getElementById('min').innerText = ''; 
        document.getElementById('max').innerText = '';  
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {           
                maxValue = answerNumber - 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answertext = convertnumber(answerNumber);

                const textrand = Math.round(Math.random() * 2);
                if (textrand == 0) {
                    answerField.innerText = `Вы загадали число \n ${answertext }?`;
                } else if (textrand == 1) {
                    answerField.innerText = `Скорее всего это число \n ${answertext }?`;
                } else {
                    answerField.innerText = `Судя по всему это число \n ${answertext }?`;
                }
                
            }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
            if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;

                answerField.innerText = answerPhrase;
                gameRun = false;
            } else {           
                minValue = answerNumber + 1;
                answerNumber = Math.floor((minValue + maxValue) / 2);
                orderNumber++;
                orderNumberField.innerText = orderNumber;
                answertext = convertnumber(answerNumber);

                const textrand = Math.round(Math.random() * 2);
                if (textrand == 0) {
                    answerField.innerText = `Вы загадали число \n ${answertext }?`;
                } else if (textrand == 1) {
                    answerField.innerText = `Скорее всего это число \n ${answertext }?`;
                } else {
                    answerField.innerText = `Судя по всему это число \n ${answertext }?`;
                }

            }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const textrand = Math.round(Math.random() * 2);
        if (textrand == 0) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        } else if (textrand == 1) {
            answerField.innerText = `Я почти всегда угадываю\n\u{1F60E}`
        } else {
            answerField.innerText = `Легко! Попробуй еще раз!\n\u{1F60E}`
        }        
        gameRun = false;
    }
})


function convertnumber(number) {

        var total = number.toString();
        var arrNumber = [];
            for (let i = 0; i < total.length; i++) {
                arrNumber.push(total[i]);
            } 
        var arrNumberText = '';

        if ( number > 19 ) {
            if (total.length == 2){
                switch (arrNumber[0]) {
                    case '2': arrNumberText = 'двадцать'; break;
                    case '3': arrNumberText = 'тридцать'; break;
                    case '4': arrNumberText = 'сорок'; break;
                    case '5': arrNumberText = 'пятьдесят'; break;
                    case '6': arrNumberText = 'шестьдесят'; break;
                    case '7': arrNumberText = 'семьдесят'; break;
                    case '8': arrNumberText = 'восемьдесят'; break;
                    case '9': arrNumberText = 'девяносто'; break;
                    //case '0': arrNumberText = ''; break;
                }
                arrNumberText += '';              
                switch (arrNumber[1]) {
                    case '1': arrNumberText += ' один'; break;
                    case '2': arrNumberText += ' два'; break;
                    case '3': arrNumberText += ' три'; break;
                    case '4': arrNumberText += ' четыре'; break;
                    case '5': arrNumberText += ' пять'; break;
                    case '6': arrNumberText += ' шесть'; break;
                    case '7': arrNumberText += ' семь'; break;
                    case '8': arrNumberText += ' восемь'; break;
                    case '9': arrNumberText += ' девять'; break;
                    //case '0': arrNumberText += ''; break;
                }
            } else  if (total.length == 3){
                switch (arrNumber[0]) {
                    case '1': arrNumberText = 'сто'; break;
                    case '2': arrNumberText = 'двести'; break;
                    case '3': arrNumberText = 'триста'; break;
                    case '4': arrNumberText = 'четыреста'; break;
                    case '5': arrNumberText = 'пятьсот'; break;
                    case '6': arrNumberText = 'шестьсот'; break;
                    case '7': arrNumberText = 'семьсот'; break;
                    case '8': arrNumberText = 'восемьсот'; break;
                    case '9': arrNumberText = 'девятьсот'; break;
                    //case '0': arrNumberText = ''; break;
                }
                arrNumberText += '';              
                switch (arrNumber[1]) {
                    case '1': arrNumberText += ' десять'; break;
                    case '2': arrNumberText += ' двадцать'; break;
                    case '3': arrNumberText += ' тридцать'; break;
                    case '4': arrNumberText += ' сорок'; break;
                    case '5': arrNumberText += ' пятьдесят'; break;
                    case '6': arrNumberText += ' шестьдесят'; break;
                    case '7': arrNumberText += ' семьдесят'; break;
                    case '8': arrNumberText += ' восемьдесят'; break;
                    case '9': arrNumberText += ' девяносто'; break;
                    //case '0': arrNumberText += ''; break;
                }
                arrNumberText += '';              
                switch (arrNumber[2]) {
                    case '1': arrNumberText += ' один'; break;
                    case '2': arrNumberText += ' два'; break;
                    case '3': arrNumberText += ' три'; break;
                    case '4': arrNumberText += ' четыре'; break;
                    case '5': arrNumberText += ' пять'; break;
                    case '6': arrNumberText += ' шесть'; break;
                    case '7': arrNumberText += ' семь'; break;
                    case '8': arrNumberText += ' восемь'; break;
                    case '9': arrNumberText += ' девять'; break;
                   // case '0': arrNumberText += ''; break;
                }
            }
        } else {

            switch (number) {
                case '1': arrNumberText += 'один'; break;
                case '2': arrNumberText += 'два'; break;
                case '3': arrNumberText += 'три'; break;
                case '4': arrNumberText += 'четыре'; break;
                case '5': arrNumberText += 'пять'; break;
                case '6': arrNumberText += 'шесть'; break;
                case '7': arrNumberText += 'семь'; break;
                case '8': arrNumberText += 'восемь'; break;
                case '9': arrNumberText += 'девять'; break;
                case '10': arrNumberText += 'десять'; break;
                case '11': arrNumberText += 'одинадцать'; break;
                case '12': arrNumberText += 'двенадцать'; break;
                case '13': arrNumberText += 'тринадцать'; break;
                case '14': arrNumberText += 'четырнадцать'; break;
                case '15': arrNumberText += 'пятнадцать'; break;
                case '16': arrNumberText += 'шестнадцать'; break;
                case '17': arrNumberText += 'семнадцать'; break;
                case '18': arrNumberText += 'восемнадцать'; break;
                case '19': arrNumberText += 'девятнадцать'; break;
            }

        }

        if (arrNumberText !='' && arrNumberText.length < 20) {
            return arrNumberText;
        } else {
            return number;
        }    

}

