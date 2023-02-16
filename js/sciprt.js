"use strict";

for (let  i = 0; i< 3; i++){
    console.log(i);
    for(let j= 0; j < 3; j++){
        console.log(j);
    }
}

//*
//** 
//*** 
//****
//*****
//****** 

let result = "";
const lenthg = 7;

for( let i = 1; i < lenthg; i++){

    for (let j = 0; j < i; j++){
        result += "*";
    }
    result += "\n";
}
console.log(result);

start: for (let  i = 0; i< 3; i++){
    console.log(`First level: ${i}`);
    for(let j= 0; j < 2; j++){
        console.log(`Second level: ${j}`);
    }
    for(let k= 0; k < 2; k++){
        if (k === 2) continue start;
        console.log(`Third level: ${k}`);
    }
}






// let num = 50;

// // while( num < 60){
// //     console.log (num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // } while (num < 53);

// for ( let i = 1; i < 12; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }