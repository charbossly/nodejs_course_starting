let name = "Charbel"
let age = 20;
let isStudent = true;


const userInfos = (userName, userAge, userIsStudent) => {
    return (`The user ${userName} has ${userAge} old and is student ? : ${userIsStudent}`)
};



console.log(userInfos(name, age, isStudent));

const increment = a => ++a;

console.log(increment(2));

const randomNumber = () => Math.random();

console.log(randomNumber());