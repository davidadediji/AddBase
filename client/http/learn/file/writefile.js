const fs = require('fs');
const fsp = require('fs/promises');

const content = 'some content';

// fs.writeFile('./text.txt', content, (err)=>{
//     if (err)
//         console.log(err)
// })

//synchronous version

// const moreContent = 'some more content!!!!'

// try {
//     // fs.writeFileSync('./text.txt',moreContent)

// } catch (err) {
//     console.error(err)
// }

//promise based version

const example = async (content) => {
	try {
		await fsp.writeFile('./text.txt', content, {flag:'w+'});
	} catch (err) {
		console.log(err);
	}
};

//promise based read version

const readfile = async () => {
    try{
        const data = await fsp.readFile('./text.txt', 'utf8')
        console.log(data)
    }catch(err){
        console.log(err)
    }
};

example('more awsomeness');
readfile();
