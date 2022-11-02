const user = {
    name: 'Charbel',
    age: 20,
    isStudent: true,
    names: {
        username: 'charb',
        commonname: 'charbossly'
    },
    get: function () {
        return `User:${this.name}, Age: ${this.age}`
    }
};

console.log(user?.names.commonname == 'charbossly' ? 'Found' : 'Not exist');

console.log(user?.get());