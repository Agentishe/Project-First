'use strict';

if (4 == 4)  {
    console.log("OK, it's correct!");
} else {
    console.log ("No,  it's not correct");
}

const num = 50;

if (num < 49){
    console.log('Error');
} else if (num > 100){
    console.log ('Too much');
} else {
    console.log('Fine');
}

const num = 50;

(num === 50) ? console.log('Ok') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('Not right');
        break;
    case 80:
        console.log('Again, not right');
        break;
    case 50:
        console.log('You get a target');
        break;
    default:
        console.log('Not right');
        break;       
     
}
