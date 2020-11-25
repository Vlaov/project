"use strict"

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('A lot of');
// } else {
//     console.log('Ok!');
// }


// (num === 50) ?  console.log('Ok!') : console.log('Error');

const num = '50';

switch (num) {
    case '49': 
        console.log('Losing');
        break;
    case '100':
        console.log('Losing');
        break;
    case '50':
        console.log('True');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
