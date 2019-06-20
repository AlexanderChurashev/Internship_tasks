var userService = {
    currentFilter: 'active',
    users: [{ name: 'Alex', status: 'active' }, { name: 'Nick', status: 'delete' }],
    getFiltered: function() {
        debugger;
        // создаем переменную которой присваиваем значение this (var self = this) и в строке где мы обращаемся к свойству currentFilter записываем self.currentFilter;
        return this.users.filter(function(user) {
            return user.status === this.currentFilter; // this ссылается на users, а у users нет свойства currentFilter
        });
    },
};

console.log(userService.getFiltered());

var a = {}; // создаем ссылку на глобальный объект
function clear(a) {
    a.a = 10; // присваиваем глобальной ссылке свойство
    a = null; // присваиваем null локальной переменной, при этом ссылка на глобальный объект не изменяется
}

clear(a);

console.log(a); // Выводим глобальный объект со свойством a = {a:10}

function calc(num) {
    var str = num.toString();
    var result = 0;
    var arr = str.split('');
    arr.forEach(function(item) {
        if (!isNaN(item)) {
            result += +item;
        }
    });
    /*for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result += +arr[i];
        }

    }*/
    return result;
}

console.log(calc(1.23));
console.log(calc(1234));

function calc1(num) {
    var str = num.toString();
    var reg = /\d/g;
    var arr = str.match(reg);
    var sum = arr.reduce(function(acc, item) {
        return (acc += +item);
    }, 0);
    return sum;
}
console.log(calc1(1.23));
console.log(calc1(1234));
