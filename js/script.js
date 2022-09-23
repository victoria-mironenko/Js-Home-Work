let userName;
do {
    userName = prompt('Ваше имя');
} while (userName === '' || userName === null);


let userFatherName;
do {
    userFatherName = prompt('Ваше отчество');
} while (userFatherName === '' || userFatherName === null);

let userSurName;
do {
    userSurName = prompt('Ваша фамилия');
} while (userSurName === '' || userSurName === null);

let user = userName + ' ' + userFatherName + ' ' + userSurName;

let userAge;
do {
    userAge = prompt('Ваш возраст в годах');
} while (userAge < 3 || userAge > 100 || userAge === null);

let userGender = confirm('Ваш пол - мужской?');
if (userGender == true) {
    userGender = ('мужской');
} else {
    userGender = ('женский');
}

let pension;
if (userAge >= 60) {
    pension = ('Вы на пенсии: да');
} else {
    pension = ('Вы на пенсии: нет');
}

alert('ваше ФИО:' + ' ' + user + '\n' +
    'ваш возраст в годах:' + ' ' + userAge + '\n' +
    'ваш возраст в днях:' + ' ' + userAge * 365 + '\n' +
    'через пять лет вам будет:' + ' ' + (Number(userAge) + 5) + '\n' +
    'ваш пол:' + ' ' + userGender + '\n' + pension);