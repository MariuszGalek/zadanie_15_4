// TASK 1 //

const string1 = 'Hello';
const string2 = 'World!';

console.log(`${string1} ${string2}`);

// TASK 2 //

const multiply = (a, b=1) => a * b;

console.log(multiply(5));
console.log(multiply(2,3));

// TASK 3 //

const average = (...args) => args.reduce((sum, next) => sum + next) / args.length;

console.log(average(1,10,20,20));
console.log(average(2, 4, 6));

// TASK 4 //

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// TASK 5 //

const array = [1, 4, 'Iwona', false, 'Nowak'];
const[ , , firstname, , lastname] = array;
console.log(`${firstname} ${lastname}`);