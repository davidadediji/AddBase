/**
 * Getting information out of a path
 */

//dirname:parent folder of a file
//basename:filename part
//extname:get the file extension
const path = require('path')

const notes = './text.txt'

console.log(path.extname(notes));
path.dirname(notes);
console.log(path.basename(notes, path.extname(notes)));

//you can join two or more parts of a path path.join()

const name ='joe'
const newpath = path.join('/', 'users', name, 'notes.txt')
console.log(newpath)

//get the absolute path calculation of a relative path with path.resolve()

const resolvepath = path.resolve('text.txt')

console.log(resolvepath)

const normalisepath = path.normalize('/home/..//text.txt')
console.log(normalisepath)

//neither normalise or resolve will check if the path exists 

