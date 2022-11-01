const fs = require('fs')

const fsp = require('fs/promises')

const content = 'add some more file content here'

// fs.appendFile('file.log', content, {flag:'a+'}, (err)=>{
//     if(err){
//         console.error(err)
//     }
// })

try {
    fs.appendFileSync('./file.log', '\ni do not understand')
} catch (err) {
    console.error(err)
    
}

//promise based 

async function appendFile(contently){
    try {
        await fsp.appendFile('./file.txt', contently)
    } catch (err) {
        console.error(err)
    }
}

appendFile('\n\n\twhat is your name?')