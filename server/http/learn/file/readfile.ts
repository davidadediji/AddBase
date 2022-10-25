const fs = require('fs');
const fsp = require('fs/promises')
const { exit } = require('process');

fs.readFile('./text.txt', 'utf8', (err:NodeJS.ErrnoException, data:string) => {
    if (err){
        console.error(err);
        return
        // exit(1);
    }
    console.log(data);
});

//synchronous version

try{
    const data = fs.readFileSync('./text.txt', 'utf8')
    console.log(data)
}catch(err){
    console.error(err)
}


//asynchronous version

let arr = []

async function example() {
    try {
        const data = await fsp.readFile('./text.txt', {encoding:'utf8'})
        // arr.push(data)
    } catch (err) {
        console.error(err)
    }
}

example()

