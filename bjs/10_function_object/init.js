
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender; 
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay; 
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;  
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear; 
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;    
    document.getElementById('jobOutput').innerText = initPerson.job;   

};


document.getElementById('generate').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender; 
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay; 
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;  
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear; 
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;    
    document.getElementById('jobOutput').innerText = initPerson.job; 
});

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('genderOutput').innerText = 'Пол'; 
    document.getElementById('birthDayOutput').innerText = 'Дата рождения'; 
    document.getElementById('birthMonthOutput').innerText = '';  
    document.getElementById('birthYearOutput').innerText = ''; 
    document.getElementById('secondNameOutput').innerText = 'Отчество';    
    document.getElementById('jobOutput').innerText = 'Профессия'; 
})