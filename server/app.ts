// const chalk = require('chalk');

import ProgressBar from 'progress';

const bar = new ProgressBar(':bar', {total:5})

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
}, 100)