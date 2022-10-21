const { add } = require('nodemon/lib/rules');
const repl = require('repl');
const {Car, addNum} = require('./module')

const {brand, year} = Car


console.log(brand, year)
console.log(addNum(2, 5))

// repl.start('$ ').on('exit', () => {
// 	console.log('exiting repl');
// 	process.exit();
// });


// process.argv.forEach((val, index)=>{
// 	console.log(`${index}: ${val}`);
// })


// const args = process.argv.slice(2);
// console.log(args[0]);




// const args = require('minimist')(process.argv.slice(2))
// console.log(args.name)

