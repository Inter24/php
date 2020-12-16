const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Ирина",
            "id_3": "Кристина",
            "id_4": "Арина",
            "id_5": "Полина",
            "id_6": "Юлия",
            "id_7": "Александра",
            "id_8": "Василиса",
            "id_9": "Фрося",
            "id_10": "Ксюша"
        }
    }`,

    secondNameMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Семенович",
            "id_2": "Петрович",
            "id_3": "Михайлович",
            "id_4": "Сергеевич",
            "id_5": "Артемович"
        }
    }`,

    secondNameFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Сергеевна",
            "id_2": "Михайловна",
            "id_3": "Николаевна",
            "id_4": "Семеновна",
            "id_5": "Петровна"
        }
    }`,

    jobMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Сварщик",
            "id_2": "Водитель",
            "id_3": "Грузчик",
            "id_4": "Шахтер",
            "id_5": "Слесарь"
        }
    }`,

    jobFemaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "Швея",
            "id_2": "Продавец",
            "id_3": "Менеджер"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomYearNumber: (max = 2020, min = 1950) => Math.floor(Math.random() * (max - min + 1) + min),

    randomDayShort: (max = 28, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomDayLong: (max = 30, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {

        return (this.randomIntNumber() == 1) ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomFirstName: function(randomGender) {

        if (randomGender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomSurname: function(randomGender) {

        if (randomGender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson)+'a';
        }

    },

    
    randomBirthMonth: function() {
        
        return this.randomValue(this.birthMonthJson);

    },

    randomBirthDay: function(randomBirthMonth) {
        
        if (randomBirthMonth=='Февраля') {
            return this.randomDayShort();
        } else {
            return this.randomDayLong();
        }
        
    },

    randomBirthYear: function() {

        return this.randomYearNumber();

    },

    randomSecondName: function(randomGender) {

        if (randomGender == this.GENDER_MALE) {
            return this.randomValue(this.secondNameMaleJson);
        } else {
            return this.randomValue(this.secondNameFemaleJson);
        }

    },

    randomJob: function(randomGender) {

        if (randomGender == this.GENDER_MALE) {
            return this.randomValue(this.jobMaleJson);
        } else {
            return this.randomValue(this.jobFemaleJson);
        }

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.birthMonth = this.randomBirthMonth();  
        this.person.birthDay = this.randomBirthDay(this.person.birthMonth);     
        this.person.birthYear = this.randomBirthYear();
        this.person.secondName = this.randomSecondName(this.person.gender);
        this.person.job = this.randomJob(this.person.gender);   
        return this.person;
    }
};
