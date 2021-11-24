
//partA==>asynce
const fs = require('fs');
fs.readFile('./from.txt', { encoding: 'utf-8' }, function (err, data) {
    if (err) {
        console.log(`err=>${err}`);
    }
    else {
        fs.writeFile('./to.txt', data, function (err) {
            if (err) {
                console.log(`err is=>${err}`);

            }
        })

    }

});
//========================================================================
//partB===>synce
 const fs = require('fs');
let readData = fs.readFileSync('./from.txt', { encoding: 'utf-8' });
let appenddData =fs.appendFileSync('./to.txt',readData)


//===========================================================================
// partC===>synce
const fs = require('fs');
fs.readFile('./from.txt', { encoding: 'utf-8' }, function (err, data) {
    if (err) {
        console.log(`err=>${err}`);
    }
    else {
        fs.appendFile('./to.txt', data, function (err) {
            if (err) {
                console.log(`err is=>${err}`);

            }
        })

    }

});


fs.readFile('./append.txt', { encoding: 'utf-8' }, function (err, data) {
    if (err) {
        console.log(`err=>${err}`);
    }
    else {
        fs.appendFile('./to.txt', data, function (err) {
            if (err) {
                console.log(`err is=>${err}`);

            }
        })

    }

});
//===========================================================================
// partD===>asynce

const fs = require('fs');
let readDataFromTxt = fs.readFileSync('./from.txt', { encoding: 'utf-8' });
let readDataAppendTxt = fs.readFileSync('./append.txt', { encoding: 'utf-8' });
let appenddDataFromTxt =fs.appendFileSync('./to.txt',readDataFromTxt);
let appenddDataAppendTxt =fs.appendFileSync('./to.txt',readDataAppendTxt);