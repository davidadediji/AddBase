const chalk = require('chalk');
const code = 5;
const extendstring = `this is a new error`;

console.error('error #%s', extendstring);

const x = 1;
const y = 2;

//format specifiers: %s, %i, %d, %o

// console.log(x, y, 'some extra here');
// console.log(`I am printing ${x} ${y} then %s`, extendstring);

//counting elements

const z = 1;

console.count(
	'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
	'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
	'The value of y is ' + y + ' and has been checked .. how many times?'
);

const oranges = ['oranges', 'oranges', 'apple'];

oranges.forEach((fruit) => {
	console.count(fruit);
});

//count reset from the console.count function
console.countReset('oranges');

oranges.forEach((fruit) => {
	console.count(fruit);
});

//Print the stack trace

const function2 = () => console.trace();
const function1 = () => function2();

// function1()

const doSomething = () => console.log('test');

const measureTime = () => {
	console.time('doSomething()');

	doSomething();

	console.timeEnd('doSomething()');
};

measureTime();

//color an output:

//using escape sequences.
console.log('\x1b[33m%s\x1b[0m', 'hi!');

console.log(chalk.blue('Hello world'));

const log = console.log;

console.log(chalk.green('hello'));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
