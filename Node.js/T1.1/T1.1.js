
let showingName = function (firstName, lastName, callbackFunc) {

    callbackFunc(firstName, lastName);
}

const firstName = 'Behzad';
const lastName = 'Shafiee';

function showing(firstName, lastName) {
    console.log(`result===>${firstName}${lastName}`);

}


showingName(firstName, lastName, showing)




