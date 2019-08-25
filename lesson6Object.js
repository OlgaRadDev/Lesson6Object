// Задание)

// 1. Вам нужно написать функцию isCharPresent. Она принимает 2 аргумента -
// строку и символ и узнает содержится ли символ в строке,
// возражает true / false
//
// 2. Написать вункцию charIndexOf. Принимает такие же аргументы,
//     как первая функция, но возвращает индекс или -1, если символа нет.
//
//     Как вы понимаете, пользоваться методами includes и indexOf - нельзя)
//
// Задание со звездочкой! Подумайте над оптимальностью своих алгоритмов поиска)
//
// 3. Ну и вишенка на торте. Нужно реализовать функцию objectClone
// для 2 уровней объектов. Это означает, что вложенный
// объект 2 уровня, тоже должен быть клонирован.


function isCharPresent(str, symbol) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            return true;
        }
    }
    return false;
}

console.log('isCharPresent: ');
console.log(isCharPresent('beautiful', 't'));

function charIndexOf(str, symbol) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            return i;
        }
    }
    return -1;
}

console.log('charIndexOf: ');
console.log(charIndexOf('hello', 'l'));

var person = {
    name: 'Alex',
    surname: 'Ivanov',
    age: 35,
    isMan: true,
    friend: {
        name: 'Ann',
        surname: 'Petrova',
        age: 25,
        isMan: false,
        lovedBook: {
            name: 'Peasful warrior',
            author: 'Dan Millman',
            dateOfIssue: 2005
        }
    },
    child: {
        name: 'Andrew',
        age: 14,
        isMan: true
    }
};

function objectClone(obj) {
    var newPerson = {};
    for (var key in obj) {
        newPerson[key] = obj[key];
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
        var childObj = {};
        var innerObj = obj[key];
        for (var index in innerObj) {
            childObj[index] = innerObj[index];
        }
        newPerson[key] = childObj;
    }
    return newPerson;

}


console.log(person);
console.log('Cloned object ---------------------');
person.name = 'Peter';
person.friend.name = 'Kate';
person.friend.age = 20;
person.child.name = 'Sam';
person.friend.lovedBook.name = 'Peace and War';
person.friend.lovedBook.author = 'Lev Tolstoy';
person.friend.lovedBook.dateOfIssue = 1870;
console.log(objectClone(person));
