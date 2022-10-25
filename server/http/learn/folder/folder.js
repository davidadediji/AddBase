/**
 * create a new folder
 */

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const folderName = '../folder/NewMount';

// try{
//     if(!fs.existsSync(folderName)){
//         fs.mkdirSync(folderName)
//     }
// }catch(err){
//     console.error(err)
// }

// fs.mkdir(folderName, (err) => {
// 	if (err) {
// 		console.log(err.code);
// 	}
// });

async function mkFolder() {
	try {
		await fsp.mkdir('newDavid');
	} catch (err) {
		console.error(err);
	}
}
// mkFolder();

/**
 * Read contents of a folder
 */

const folderPath = './newDavid';
const name = fs.readdirSync(folderPath);
console.log(name); //returns file name

//returns arrays of folderpath + contents
const fullpaths = name.map((filename) => {
	return path.join(folderPath, filename);
});

console.log(fullpaths);

//return only files

const isFile = (fileName) => {
	return fs.lstatSync(fileName).isFile();
};

const filesOnly = name
	.map((filename) => {
		return path.join(folderPath, filename);
	})
	.filter(isFile);

console.log(filesOnly);
