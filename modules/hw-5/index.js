// !task#1

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    return arr.slice();
}
let arr1 = arrayClone(vegetables);
console.log(arr1);

// ?----------------------------------------------------------------------

// !task#2

let str1 = vegetables.join(',');
console.log(str1);

let str2 = String(vegetables);
console.log(str2);

let str3 = vegetables.reduce((accum, item) => {
    accum = accum + ',' + item;
    return accum;
})
console.log(str3);

// ?----------------------------------------------------------------------

// !task#3
const num = prompt('Введите число', 55);

function colonOdd(num) {
    let arr = num.split('');
    let result = arr.reduce(function (sum, element, index, arr) {
        if ((arr[index - 1] % 2 !== 0) && (arr[index]) % 2 !== 0) {
            return sum + ':' + element;
        } else {
            return sum + element;
        }
    })
    return result;
}
console.log(colonOdd(num));

// ?----------------------------------------------------------------------

// !task#4

const string = 'КаЖдЫй ОхОтНиК';

function changeRegister(str) {
    let strArr = str.split('');
    let newArr = [];
    strArr.forEach(element => {
        if (element === element.toLowerCase()) {
            newArr.push(element.toUpperCase());
        } else {
            newArr.push(element.toLowerCase());
        }
    });
    return newArr;
}

console.log(changeRegister(string));


// ?----------------------------------------------------------------------

// !task#5

let arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
];
function removeDuplicates(arr) {
    let result = [];
    arr.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return result;
}
console.log(removeDuplicates(arr));

// ?----------------------------------------------------------------------

// !task#6

const arrA = [1, 2, 3, 4, 5];
const arrB = [4, 5, 6];
let result = arrA.map((item, ind) => {
    if (arrA[ind] === undefined) {
        return 0 + arrB[ind];
    } else if (arrB[ind] === undefined) {
        return item + 0;
    }
    return item + arrB[ind];
})
console.log(result);

// ?----------------------------------------------------------------------

// !task#7

let arrCount = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
function countIdentic(arr) {

    let arOfDubl = arrCount.slice();
    let count = 0;
    let test = [];
    arOfDubl.forEach(elem => {
        elem = arOfDubl.shift();
        if (test.includes(elem)) {
            test.push(elem);
        } else if (arOfDubl.includes(elem)) {
            return count++;
        }
    })
    return count;

}

console.log(countIdentic(arrCount));

// ?----------------------------------------------------------------------

// !task#8

let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
function compareNumbers(array) {
    array.sort((a, b) => b - a);
}
compareNumbers(numbers);
console.log(numbers);

// ?----------------------------------------------------------------------

// !task#9

const litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Коул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
];
let r = litmir.slice()
    .sort((a, b) => a.title > b.title ? 1 : -1)
    .reduce((accum, item) => {
        accum.push(item.title);
        return accum;
    }, []);

console.log(r);

// ?----------------------------------------------------------------------

// !task#10

function propertyValue(array, key) {

    let myR = array.reduce((accum, item) => {
        accum.push(item[key]);
        return accum;
    }, []);
    return myR;
}

console.log(propertyValue(litmir, 'title'));
console.log(propertyValue(litmir, 'author'));

// ?----------------------------------------------------------------------