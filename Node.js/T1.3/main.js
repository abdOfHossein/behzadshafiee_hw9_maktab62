
// partA===>asynce

const fs = require('fs');
fs.open('newFile.txt', 'ax', function (err, file) {
if(err){
    console.log(`err=>${err}`);

}
 
});

//===========================================================================
// partB===>asynce

const fs = require('fs');
let creatNewFile=fs.openSync('newFile.txt', 'a');