var NameUser = prompt('Введите ваше имя пользователя!', '');
if (/[0-9]/.test(NameUser)) {
    document.write(NameUser.toUpperCase());
}
else {
    document.write(NameUser.split('').reverse().join(''));
}
