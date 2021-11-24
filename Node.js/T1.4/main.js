let fs = require('fs');

let dataName = [];
let dataNumber = [];
dataName.push(fs.readFileSync('./name.txt', { encoding: 'utf-8' }));
dataNumber.push(fs.readFileSync('./number.txt', { encoding: 'utf-8' }));
let regExp =/\d{4}-/g
let IdArr=[]

for(let i=0;i<dataName.length; i++){
    if(dataName[i].match(regExp));
}

console.log(IdArr);
