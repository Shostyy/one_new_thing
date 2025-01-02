function greetTest(greeting, punctuation) {
    console.log('1', greeting);
    console.log('2', punctuation);
    console.log('3', this.name);
}

//greetTest('Hello', 'Melisa');

const user = {
    name: 'Alisa',
}

function greet(greeting, punctuation) {
    console.log(`${greeting} ${this.name}${punctuation}`);
}

greet.call(user, 'Goodbye', '...');

const greetArrow = (greeting, punctiation) => {
    console.log(`${greeting} ${this.name} ${punctiation}`);
}

greetArrow('GoodByE', '!?');

greetArrow.call(user, 'asd', 'sdf');

console.dir('greet', greet);
console.dir('greetArrow', greetArrow);