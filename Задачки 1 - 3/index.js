//Функция разворота числа
function reverse(num) {
    var str = String(num);
    var strRev = '';
    for (var i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    return +strRev;
}
console.log(reverse(12345));

function reverse1(num) {
    var str = String(num);
    var strRev = str
        .split('')
        .reverse()
        .join('');
    return +strRev;
}
console.log(reverse1(6789));

//Функция сортировки от меньшего числа к большему
function sortWords(str) {
    var tempArr = [];
    var reg = /\d+/;
    var arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {
        tempArr.push(arr[i].match(reg));
    }

    tempArr.sort(function(a, b) {
        return a[0] - b[0];
    });

    arr = [];

    for (var i = 0; i < tempArr.length; i++) {
        arr.push(tempArr[i].input);
    }

    return arr.join(' ');
}
console.log(sortWords('A31lice 22Bob Er10nst'));

//Получение простого числа
Number.prototype.isSimple = function() {
    for (var i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
        return true;
    }
};
console.log((5).isSimple());
console.log((6).isSimple());
console.log((7).isSimple());
console.log((123).isSimple());
